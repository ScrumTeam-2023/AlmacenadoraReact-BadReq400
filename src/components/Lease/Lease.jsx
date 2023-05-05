export const Lease = ({fechaInicio, fechaFin, serviciosAdicionales, bodega, user})=>{ //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td>{fechaInicio}</td>
            <td>{fechaFin}</td>
            <td>{serviciosAdicionales}</td>
            <td>{bodega}</td>
            <td>{user}</td>
        </>
    )
}