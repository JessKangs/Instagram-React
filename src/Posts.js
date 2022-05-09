function Post (Props) {
    return (
        <div class="post">
            <div class="topo-post">

                <div class="perfil-post">
                    <img class="redondo" src="https://i.pinimg.com/736x/cb/44/f9/cb44f97292e5b62c2eba9d6e1dbd5c8f.jpg" alt=""/>
                    <h3>meowed</h3>
                </div>

                <ion-icon id="config" name="ellipsis-horizontal-outline"></ion-icon>

            </div>

            <img id="img-post" src={Props.postImg} alt=""/>

            <div class="bot-post">

                <div class="lado-esquerdo">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>                            
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon id="lado-direito" name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img class="redondo" src={Props.curtidasFoto} alt="perfil de quem curtiu"/>
                    <h3>Curtido por <h2>{Props.usuario}</h2> e <h2>outras 101.523 pessoas</h2>
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default function Posts () {
    return (
    <div class = "Posts">
        
        <Post postImg="https://thumbs.dreamstime.com/b/retrato-bonito-do-gato-foto-quadrada-105311158.jpg" curtidasFoto="https://www.petz.com.br/blog/wp-content/uploads/2020/04/meu-primeiro-gato.jpg" usuario="janice"/>
        <Post postImg="http://i.imgur.com/mwrdtI5.jpg" curtidasFoto="https://i.pinimg.com/736x/bb/f1/52/bbf152b1d1b28fb1dc64822c20fabaeb.jpg" usuario="RisaLover" />

    </div>
    )
}