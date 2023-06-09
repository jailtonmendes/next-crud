import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente'
import Image from 'next/image'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 22, '2'),
    new Cliente('Carlos', 38, '3'),
    new Cliente('Pedro', 46, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    // console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente) {}

  return (
    <div className={`
    flex h-screen justify-center items-center
    bg-gradient-to-tr from-white via-transparent to-cyan-200 bg-cyan-100
    text-white
    
    `}>
      <Layout titulo='Cadastro Simples'>
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
