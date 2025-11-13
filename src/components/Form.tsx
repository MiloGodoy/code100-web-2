'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

  const enviarAlEndpoint = async (payload: any) => {
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
    } catch (error: any) {
      console.error("Error al enviar:", error);
      setMessage(`❌ Error: ${error.message}`);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let certificateType = { id: "" };
    let holderType = { id: "" };

    switch (formData.tipoCertificado) {
      case "Tributario F1":
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

    setFormData({
      ...formData,
      tipoCertificado: selectedCertificateType,
      tipoTitular: holderType.code,
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
        <label className="block text-gray-700 font-medium mb-1">
          Tipo de Certificado
        </label>
        <select
          className="w-full border rounded-lg p-2"
          value={formData.tipoCertificado}
          onChange={handleCertificateTypeChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Tributario F1">Tributario F1</option>
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

      {/* Tipo de Emisión */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Tipo de Emisión
        </label>
        <input
          type="text"
          value={formData.tipoEmision}
          className="w-full border rounded-lg p-2 bg-gray-100"
          readOnly
        />
      </div>

      {/* Validez */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Validez</label>
        <select
          className="w-full border rounded-lg p-2"
          value={formData.validez}
          onChange={(e) =>
            setFormData({ ...formData, validez: e.target.value })
          }
        >
          {[1, 2, 3, 4].map((y) => (
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
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Número de Identificación
        </label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={formData.numeroIdentificacion}
          onChange={(e) =>
            setFormData({ ...formData, numeroIdentificacion: e.target.value })
          }
          required
        />
      </div>

      {/* Teléfono */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Teléfono</label>
        <div className="flex items-center border rounded-lg p-2">
          {!isCustomCode ? (
            <select
              className="text-lg mr-2 bg-transparent"
              value={formData.telefonoCodigo}
              onChange={(e) => {
                if (e.target.value === "Otro") {
                  setIsCustomCode(true);
                  setCustomCode("");
                } else {
                  setFormData({ ...formData, telefonoCodigo: e.target.value });
                }
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
              onChange={(e) => setCustomCode(e.target.value)}
            />
          )}
          <input
            type="tel"
            placeholder="123456789"
            className="w-full focus:outline-none"
            value={formData.telefono}
            onChange={(e) =>
              setFormData({ ...formData, telefono: e.target.value })
            }
          />
        </div>
      </div>

      {/* Correo */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          className="w-full border rounded-lg p-2"
          placeholder="tucorreo@ejemplo.com"
          value={formData.correo}
          onChange={(e) =>
            setFormData({ ...formData, correo: e.target.value })
          }
          required
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg font-semibold text-white transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {/* Mensaje */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-lg text-center font-medium ${
            success
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
