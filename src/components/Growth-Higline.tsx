export default function GrowthTimeline() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-emerald-400 via-green-400 to-amber-400 transform -rotate-1">
              <h2 className="text-4xl md:text-5xl font-bold text-center py-4 px-8">Crecemos constantemente</h2>
            </div>
          </div>
  
          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 via-emerald-400 to-emerald-400" />
            </div>
   */}
            {/* Events */}
            <div className="relative grid grid-cols-7 gap-4">
              {/* 2015 */}
              <div className="space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2015
                </div>
                <h3 className="font-bold">Fundación de la empresa</h3>
                <p className="text-sm text-gray-600">
                  Prestadores de Servicios de Certificación de Firma Digital, aprobados por el Ministerio de Industria y
                  Comercio.
                </p>
                <div className="absolute left-1/2 top-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2018 */}
              <div className="pt-[160px] space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2018
                </div>
                <h3 className="font-bold">Creación del Softwares</h3>
                <p className="text-sm text-gray-600">
                  Iniciamos el proyecto de la creación de FUTURA100, TALENTO100, DATAFLOW y CODESIGN soluciones con firma
                  digital que ayudan a la despapelización.
                </p>
                <div className="absolute left-1/2 bottom-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2019 */}
              <div className="space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2019
                </div>
                <h3 className="font-bold">Inicio de pruebas de nuestras SOLUCIONES</h3>
                <p className="text-sm text-gray-600">
                  Iniciamos las pruebas internas como empresa de los Softwares con firma digital.
                </p>
                <div className="absolute left-1/2 top-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2020 */}
              <div className="pt-[160px] space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2020
                </div>
                <h3 className="font-bold">Inicio en producción como facturadores electrónicos</h3>
                <p className="text-sm text-gray-600">
                  Empezamos a facturar electrónicamente con nuestro propio Software FUTURA100.
                </p>
                <div className="absolute left-1/2 bottom-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2021 */}
              <div className="space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2021
                </div>
                <h3 className="font-bold">Firma de Convenio con el MTESS</h3>
                <p className="text-sm text-gray-600">
                  Un convenio que une ambas instituciones para crear un proceso de Digitalización en Paraguay, por medio
                  de una plataforma virtual de recepción de Documentos Electrónicos Laborales (DEL).
                </p>
                <div className="absolute left-1/2 top-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2022 */}
              <div className="pt-[160px] space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2022
                </div>
                <h3 className="font-bold">Muchos proyectos logrados</h3>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Puesta en marcha de nuestro propio Data Center</li>
                  <li>Creación de la Fundación Code100</li>
                  <li>Formamos parte de Grupo Bepa ofreciendo Soluciones de 360°.</li>
                </ul>
                <div className="absolute left-1/2 bottom-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
  
              {/* 2023 */}
              <div className="space-y-2">
                <div className="bg-amber-400 text-black font-medium px-3 py-1 rounded-full text-sm inline-block">
                  2023
                </div>
                <h3 className="font-bold">Seguimos creciendo</h3>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>El MIC nos constituye como PCSC</li>
                  <li>Iniciamos emisiones de Certificados de Firma tipo f3</li>
                  <li>Creación de nuevas soluciones tecnológicas.</li>
                </ul>
                <div className="absolute left-1/2 top-[120px] w-2 h-2 bg-amber-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  