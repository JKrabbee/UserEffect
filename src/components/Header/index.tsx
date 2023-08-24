import HeaderStyled from './HeaderStyled'
import Story from './Story'
import storyJoao from '/assets/joao.jpeg'
import storyRafael from '/assets/rafael.png'

const perfis = [
    {
        nome: 'Joao',
        img: storyJoao
    },
    {
        nome: 'Rafael',
        img: storyRafael
    }
]

function Header () {
    return (
        <HeaderStyled> 
            {
                perfis.map((perfil) => (
                    <Story foto={perfil.img} nome={perfil.nome} /> 
                ))
            }
        </HeaderStyled>
    )
}

export default Header