import React from 'react'

const TabelaMembros = () => {
    return (
      <table className='table is-bordered is-striped is-hoverable'>
        <caption>Membros do grupo</caption>
        <thead>
          <tr><th>Nome</th><th>Matrícula</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Caio de Oliveira Kretzer</td>
            <td>18250262</td>
          </tr>
          <tr>
            <td>Gabriel Muller</td>
            <td>16100728</td>
          </tr>
          <tr>
            <td>Gabriel Vitor Garcia do Espirito Santo</td>
            <td>18150247</td>
          </tr>
          <tr>
            <td>João Gabriel Trombeta</td>
            <td>15200598</td>
          </tr>
          <tr>
            <td>Marcelo Emilio Vendramin</td>
            <td>16200653</td>
          </tr>
        </tbody>
      </table>
    )
}

export default TabelaMembros
