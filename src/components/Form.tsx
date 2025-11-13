'use client'

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface CertificateType {
  id: string;
}

interface HolderType {
  id: string;
}

interface Payload {
  issueType: string;
  holderType: HolderType;
  certificateType: CertificateType;
  registrationAuthority: { id: string };
  contact: {
    phone: string;
    emailAddress: string;
    alternativePhone: string;
    alternativeEmailAddress: string | null;
  };
  parameters: {
    holderIdentification: string;
    holderIdentificationType: string;
  };
  startValidation: boolean;
  validity: { years: number; months: number; days: number };
}


export default function CertificadoForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    tipoCertificado: "",
    tipoTitular: "Persona Física",
    tipoEmision: "VideoIdentificación",
    validez: "1",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    telefonoCodigo: "+595",
    telefono: "",
    correo: "",
  });

  const [customCode, setCustomCode] = useState("");
  const [isCustomCode, setIsCustomCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const [validityOptions, setValidityOptions] = useState<number[]>([1]);
  const [emailError, setEmailError] = useState("");
  const [identificacionError, setIdentificacionError] = useState("");

  const countryCodes = [
    { flag: "🇵🇾", code: "+595" },
    { flag: "🇦🇷", code: "+54" },
    { flag: "🇧🇷", code: "+55" },
    { flag: "🇺🇾", code: "+598" },
    { flag: "🌍", code: "Otro" },
  ];

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, router]);

  // Función para determinar holderType según certificateType
  const getHolderType = (certificateType: string) => {
    switch (certificateType) {
      case "Tributario F1":
      case "Firma F3":
        return { id: "ca27572f-99fb-4d93-82a8-8fee532170ae", code: "Persona fisica" };
      default:
        return { id: "ca27572f-99fb-4d93-82a8-8fee532170ae", code: "Persona fisica" };
    }
  };

  const enviarAlEndpoint = async (payload: Payload): Promise<void> => {
    setLoading(true);
    setMessage("");
    setSuccess(null);

    try {
      const endpoint = "/api/proxy/paraguay-orders";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload }),
      });


      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();

      // ✅ Mensaje de éxito
      setMessage("✅ Solicitud realizada correctamente. En breve le llegará un correo con el enlace para realizar su videoverificación solicitada.");
      setSuccess(true);
      return data;
    } catch (error: unknown) {
      console.error("Error al enviar:", error);
      if (error instanceof Error) {
        setMessage(`❌ Error: ${error.message}`);
      } else {
        setMessage("❌ Error desconocido");
      }
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    let certificateType = { id: "" };
    let holderType = { id: "" };

    switch (formData.tipoCertificado) {
      case "Tributario F1":
        certificateType = { id: "274f50c3-13f2-4a17-23b1-08db6790487c" };
        holderType = { id: "e4d8c4d8-b388-485c-be42-e1d71a3bdc8d" };
        break;
      case "Tributario F1 (SHA-512)":
        certificateType = { id: "a842bcde-3d11-40d2-a03a-26de9a8bd29c" };
        holderType = { id: "e4d8c4d8-b388-485c-be42-e1d71a3bdc8d" };
        break;
      case "Firma F3":
        certificateType = { id: "489a1416-bec1-418b-a6f7-288057047725" };
        holderType = { id: "ca27572f-99fb-4d93-82a8-8fee532170ae" };
        break;
      default:
        holderType = { id: "ca27572f-99fb-4d93-82a8-8fee532170ae" };
    }

    const registrationAuthority = { id: "6c757a6d-2b70-4882-a6a1-8007381c7295" };

    const payload = {
      issueType: "VideoIdentification",
      holderType,
      certificateType,
      registrationAuthority,
      contact: {
        phone: `${isCustomCode ? customCode : formData.telefonoCodigo} ${formData.telefono}`,
        emailAddress: formData.correo,
        alternativePhone: "",
        alternativeEmailAddress: null,
      },
      parameters: {
        holderIdentification: formData.numeroIdentificacion,
        holderIdentificationType: formData.tipoIdentificacion,
      },
      startValidation: false,
      validity: {
        years: parseInt(formData.validez),
        months: 0,
        days: 0,
      },
    };

    await enviarAlEndpoint(payload);
  };

  const handleCertificateTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCertificateType = e.target.value;
    const holderType = getHolderType(selectedCertificateType);

    if (selectedCertificateType === "Firma F3") {
      setValidityOptions([1, 2, 3, 4]);
    } else {
      setValidityOptions([1]); // Solo 1 año para F1
    }

    setFormData({
      ...formData,
      tipoCertificado: selectedCertificateType,
      tipoTitular: holderType.code,
      validez: "1"
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 space-y-4 bg-white rounded-xl shadow"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Formulario de Certificado
      </h2>

      {/* Tipo de Certificado */}
      <div>
        <label className="flex items-center text-gray-700 font-medium mb-1">
          Tipo de Certificado
          <div className="relative group ml-2">
            <span className="text-blue-600 font-bold cursor-pointer text-lg">ℹ️</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-3 py-2 w-72 shadow-lg z-10">
              Los certificados de tipo <strong>Tributario</strong> son de uso
              <strong> exclusivo </strong> en documentos tributarios para el sistema
              de SIFEN. Asimismo, <strong>no</strong> se permite el uso de certificados
              no tributarios para este propósito.
            </div>
          </div>
        </label>
        <select
          className="w-full border rounded-lg p-2"
          value={formData.tipoCertificado}
          onChange={handleCertificateTypeChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Tributario F1">Tributario F1</option>
          <option value="Tributario F1 (SHA-512)">Tributario F1 (SHA-512)</option>
          <option value="Firma F3">Firma F3</option>
        </select>
      </div>

      {/* Tipo de Titular */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Tipo de Titular
        </label>
        <input
          type="text"
          value={formData.tipoTitular}
          className="w-full border rounded-lg p-2 bg-gray-100"
          readOnly
        />
      </div>

      {/* Validez */}
      <div>
        <label className="flex items-center text-gray-700 font-medium mb-1">
          Validez
          <div className="relative group ml-2">
            <span className="text-blue-600 font-bold cursor-pointer text-lg">ℹ️</span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-md px-3 py-2 w-80 shadow-lg z-10">
              Los periodos de validez permitidos están reglamentados por el
              <strong> Ministerio de Industria y Comercio</strong>.
            </div>
          </div>
        </label>

        <select
          className="w-full border rounded-lg p-2"
          value={formData.validez}
          onChange={(e) => setFormData({ ...formData, validez: e.target.value })}
        >
          {validityOptions.map((y) => (
            <option key={y} value={y}>
              {y} año{y > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>


      {/* Tipo de Identificación */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Tipo de Identificación
        </label>
        <select
          className="w-full border rounded-lg p-2"
          value={formData.tipoIdentificacion}
          onChange={(e) =>
            setFormData({ ...formData, tipoIdentificacion: e.target.value })
          }
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="CedulaDeIdentidad">Cédula de Identidad</option>
          <option value="Passport">Pasaporte</option>
        </select>
      </div>

      {/* Número de Identificación */}
      {/* Número de Identificación */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Número de Identificación
        </label>

        <input
          type="text"
          className={`w-full border rounded-lg p-2 ${identificacionError ? "border-red-500" : ""
            }`}
          placeholder="Ingrese su identificación"
          value={formData.numeroIdentificacion}
          maxLength={10}  // limite máximo
          onChange={(e) => {
            const soloNumeros = e.target.value.replace(/\D/g, ""); // solo dígitos

            setFormData({ ...formData, numeroIdentificacion: soloNumeros });

            if (soloNumeros.length === 0) {
              setIdentificacionError("Debe ingresar una identificación.");
            } else if (soloNumeros.length > 10) {
              setIdentificacionError("La identificación no puede superar 10 dígitos.");
            } else {
              setIdentificacionError("");
            }
          }}
          required
        />

        {identificacionError && (
          <p className="text-red-600 text-sm mt-1">{identificacionError}</p>
        )}
      </div>


      {/* Teléfono */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Teléfono celular
        </label>

        <div className="flex items-center border rounded-lg p-2">

          {/* SELECT DEL CÓDIGO PAÍS */}
          {!isCustomCode ? (
            <select
              className="text-lg mr-2 bg-transparent"
              value={formData.telefonoCodigo}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "Otro") {
                  setIsCustomCode(true);
                  setCustomCode("");
                  return;
                }
                setFormData({ ...formData, telefonoCodigo: value });
              }}
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder="+XXX"
              className="w-20 mr-2 border rounded-lg p-1 text-center"
              value={customCode}
              onChange={(e) => {
                const val = e.target.value.replace(/[^\d+]/g, "");
                setCustomCode(val);
              }}
            />
          )}

          {/* INPUT DEL NÚMERO */}
          <input
            type="tel"
            placeholder="Ej: 981234567"
            className="w-full focus:outline-none"
            value={formData.telefono}
            maxLength={
              formData.telefonoCodigo === "+595"
                ? 9    // Paraguay sin 0
                : formData.telefonoCodigo === "+54"
                  ? 10
                  : formData.telefonoCodigo === "+55"
                    ? 11
                    : 15
            }
            onChange={(e) => {
              // SOLO NÚMEROS
              const soloNumeros = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, telefono: soloNumeros });
            }}
            required
          />
        </div>
      </div>


      {/* Correo */}
      {/* Correo */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Correo Electrónico
        </label>

        <input
          type="email"
          className={`w-full border rounded-lg p-2 ${emailError ? "border-red-500" : ""
            }`}
          placeholder="tucorreo@ejemplo.com"
          value={formData.correo}
          maxLength={50} // 🔥 límite de caracteres
          onChange={(e) => {
            const value = e.target.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            setFormData({ ...formData, correo: value });

            if (!emailRegex.test(value)) {
              setEmailError("Ingrese un correo válido (ej: usuario@dominio.com)");
            } else {
              setEmailError("");
            }
          }}
          required
        />

        {emailError && (
          <p className="text-grey-100 text-sm mt-2">{emailError}</p>
        )}
      </div>


      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg font-semibold text-white transition ${loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700"
          }`}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* Mensaje */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center font-medium ${success
            ? "bg-green-100 text-green-800 border border-green-400"
            : "bg-red-100 text-red-800 border border-red-400"
            }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
