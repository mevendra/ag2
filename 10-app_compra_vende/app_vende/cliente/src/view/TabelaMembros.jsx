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
                <td>João Gabriel Trombeta</td>
                <td>15200598</td>
            </tr>
        </tbody>
      </table>
    )
}
  
export default TabelaMembros
  