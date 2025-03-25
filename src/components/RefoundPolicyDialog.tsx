"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface RefundPolicyDialogProps {
  trigger?: React.ReactNode
}

export default function RefundPolicyDialog({ trigger }: RefundPolicyDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-amber-400 hover:bg-amber-500 text-black w-full">
            Consultar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Política de reembolso</DialogTitle>
        </DialogHeader>
        <div className="bg-gray-100 p-4 rounded-md text-sm">
          <p className="mb-4">
            La Política de Reembolsos del PCSC CODE100 S.A. es aplicada a todos los certificados que CODE100 S.A. emite
            bajo cualquiera de sus Políticas de Certificación.
          </p>
          <p className="mb-4">
            Esta política de reembolso se encuentra establecido en el Contrato de prestación de servicios de confianza y
            dicta lo siguiente:
          </p>
          <p className="mb-4">
            CODE100 S.A. podrá reembolsar al solicitante de certificados la totalidad del importe abonado por los mismos
            o podrá realizar su reemisión sin costo alguno, cuando:
          </p>
          <p className="mb-4">
            a) el solicitante presenta un reclamo sobre dicho certificado dentro de los 15 días posteriores a su fecha
            de emisión, y;
          </p>
          <p className="mb-4">
            b) dicho reclamo se debe a una falla en el certificado y error en la emisión de este por parte de CODE100
            S.A.
          </p>
          <p>
            Pasados los 15 días posteriores a la fecha de emisión del certificado, se entenderá total aceptación del
            certificado emitido y del servicio brindado por CODE100 S.A. y no se realizarán reembolsos ni devoluciones
            de ningún tipo.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

