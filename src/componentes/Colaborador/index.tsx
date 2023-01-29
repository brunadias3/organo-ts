import './Colaborador.css'

interface ColaboradorProps {
    corDeFundo: string
    imagem: string
    nome: string
    cargo: string
    data: string
}

const Colaborador = (props: ColaboradorProps) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: props.corDeFundo }}>
                <img src={props.imagem} alt={props.nome} />
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <h5>{new Date(props.data).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}

export default Colaborador