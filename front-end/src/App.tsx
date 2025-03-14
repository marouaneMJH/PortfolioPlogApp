import { useState } from "react";
import {NavLink} from "react-router-dom"
import "./App.css";

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = (): void => {
        const bodyTag = document.querySelector("body");
        bodyTag?.getAttribute("data-theme") === "dark"
            ? setTheme("dark")
            : setTheme("light");

        bodyTag?.setAttribute("data-theme", theme);

        console.log("theme togoled: ", theme);
    };

    return (
        <>
            <div>
                <NavLink to="about">About</NavLink>
                <button onClick={toggleTheme}>chnageTheme</button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta eius exercitationem repudiandae facere vel
                    reiciendis, quidem temporibus incidunt minus dignissimos,
                    cum minima iusto laboriosam. Natus, quisquam? Autem facere
                    libero dolor, molestias quia dolorem hic praesentium quas
                    excepturi consequatur, labore sapiente eligendi voluptatibus
                    optio nemo dolores nihil quam unde vero temporibus sequi
                    ipsum rerum eius! Nihil voluptatibus, rerum alias
                    consequatur numquam vero molestias deleniti a iste quo.
                    Nihil atque sit, voluptate repellat iure sapiente earum
                    nulla quod laboriosam in quia ratione minus nemo quisquam
                    quasi alias eum est! Dignissimos obcaecati illum mollitia
                    recusandae ab magnam officia, voluptates, ex facilis amet
                    repudiandae minima alias ullam, quisquam fugit magni.
                    Suscipit inventore molestiae quaerat excepturi! Illo
                    assumenda beatae perferendis sapiente explicabo ipsa tempore
                    fugiat impedit? Quod commodi placeat non, saepe voluptates
                    praesentium libero neque fuga amet dignissimos optio, nam
                    minima, recusandae magnam officia. Esse, dolorum velit?
                    Tenetur accusantium deserunt tempora maiores nam officia,
                    assumenda veritatis reiciendis quis repudiandae perspiciatis
                    provident minus facere laudantium veniam nostrum. Laborum
                    aliquam labore nihil quis temporibus quos modi quaerat
                    provident qui tenetur. Dolorem illum ex et possimus esse
                    magnam architecto dolor vero? Modi dolores ullam
                    perspiciatis et facere asperiores minus, soluta iste natus
                    ea. Asperiores doloribus, vel quas necessitatibus illum
                    nesciunt dolorum voluptatum excepturi repellat tenetur,
                    quibusdam tempora voluptatem distinctio id, consequuntur
                    quos labore sapiente. Nesciunt, sunt nisi, reiciendis enim
                    et veniam esse exercitationem impedit vel eius quam. Modi
                    maxime quis dolorum, deserunt iure tenetur veniam illo eos
                    quam assumenda autem odit deleniti. Doloremque vero suscipit
                    tenetur animi alias distinctio nesciunt obcaecati
                    exercitationem sunt ullam. Libero aperiam quis quae,
                    assumenda aliquid quod enim, rerum repudiandae voluptatem
                    fugit quos et voluptates esse incidunt fuga tempora nulla
                    tenetur atque autem optio ex laudantium cupiditate officiis.
                    Eos rerum vel quis sunt explicabo, suscipit veritatis
                    voluptatibus illum veniam labore tempora optio ipsam, eius
                    expedita debitis mollitia inventore eveniet culpa ipsa
                    repudiandae. Nesciunt, numquam? Labore aspernatur accusamus
                    mollitia hic illo tenetur dolor quae ullam dolores ratione
                    atque nesciunt qui corporis minus, recusandae, autem error
                    ut voluptate? Cum adipisci quasi, tenetur corporis explicabo
                    modi aut excepturi a odio soluta! Laudantium distinctio, non
                    dolore deleniti placeat, corrupti suscipit esse nostrum nam
                    dicta autem. Accusantium, a. Impedit autem porro sed
                    quisquam alias adipisci et explicabo necessitatibus aperiam
                    non accusamus quae, omnis reiciendis deserunt consequatur.
                    Dolore earum tenetur optio, error impedit beatae odit sint
                    fugiat, delectus neque in ea saepe unde blanditiis ut.
                    Laboriosam fugiat pariatur est voluptas nulla ratione
                    ducimus. Recusandae quisquam totam obcaecati! Ratione
                    aliquid aliquam molestias blanditiis eos molestiae fugit,
                    veritatis earum voluptate quae soluta. Ipsum voluptatum
                    delectus, dicta veritatis dolores itaque sapiente, assumenda
                    deserunt hic fugiat laboriosam error vero debitis cumque
                    possimus magnam, ea excepturi minus. Quidem accusamus quas
                    odio sed autem debitis similique aut culpa inventore eos
                    necessitatibus eius libero, nesciunt fuga esse optio labore
                    numquam sunt neque aliquam. Repellendus, nihil explicabo.
                    Molestiae necessitatibus beatae dolore odio ex possimus
                    deleniti minima debitis qui ullam nesciunt, recusandae
                    ducimus voluptas facere blanditiis. Ipsum eos consequatur
                    doloremque consequuntur! Provident iste quibusdam labore
                    dicta enim maxime. Minima iste blanditiis nemo culpa
                    delectus, provident maxime consectetur unde harum qui
                    corrupti dicta rem minus eum sed, deleniti velit veniam
                    libero. Ea corrupti necessitatibus, dignissimos, quasi
                    excepturi veniam enim voluptatum ducimus voluptas et totam
                    placeat ratione alias quia odit, aliquam molestiae! At
                    exercitationem quibusdam consequuntur earum esse quaerat.
                    Fuga nulla officia accusamus reprehenderit veritatis dolore
                    magni magnam nisi iste vitae iusto soluta natus iure
                    dignissimos itaque quis repellendus ut voluptatem
                    blanditiis, voluptas consequuntur. Voluptate debitis
                    dignissimos incidunt magnam! Molestias doloremque harum
                    sequi veniam et minus voluptates cumque pariatur,
                    necessitatibus officia enim aspernatur deserunt, ipsam,
                    explicabo quas accusamus! Ipsum excepturi laudantium a
                    natus, placeat recusandae repudiandae, veritatis fugit sed
                    soluta quasi officia temporibus assumenda incidunt quae
                    dolorum omnis cumque vel suscipit sequi animi sunt
                    reiciendis. Nemo, similique, ad ut illum nisi optio qui
                    repellat ipsum neque error aperiam tempore labore at fugit
                    consequuntur, quidem deserunt unde itaque omnis dolores.
                    Culpa ipsa ab atque, voluptates quaerat odit rem accusamus,
                    tempora eius ducimus doloribus! Quos, fuga. Velit nihil
                    totam similique asperiores assumenda distinctio sit iusto
                    eaque! Nihil similique consequatur iusto, cupiditate
                    eligendi eius corporis laborum ad? Dolorum accusamus non
                    vero nihil quae voluptas tempora facilis dolorem,
                    voluptatem, ratione aliquid nam aspernatur laudantium soluta
                    dolor nulla ducimus placeat! Praesentium, voluptatum
                    mollitia. Nesciunt ducimus minima expedita delectus dolore
                    recusandae beatae eligendi magnam corrupti ipsam debitis
                    doloribus quia quos totam nostrum similique, earum molestias
                    ad. Aspernatur doloremque reiciendis quod labore, numquam
                    maiores. Soluta modi a quas dolor minima fugiat adipisci
                    suscipit libero nobis, asperiores reprehenderit fuga quaerat
                    unde iusto voluptas sit cupiditate earum! Quas nesciunt
                    ipsam vitae! Magnam ad libero facere tempora eveniet,
                    delectus doloribus, dolorem tenetur quibusdam nemo assumenda
                    quod expedita dolores ullam quasi illum iure atque nisi,
                    suscipit sed? Laudantium laborum hic officiis voluptas
                    necessitatibus tempore neque quidem possimus quae,
                    praesentium vitae ratione ducimus id, voluptatem voluptates
                    veritatis assumenda reprehenderit quo delectus eos error vel
                    placeat? Eos, omnis modi officia temporibus delectus tenetur
                    inventore. Ab repellat quod veniam reiciendis corporis
                    commodi quibusdam mollitia quaerat fugiat nostrum quos,
                    error, debitis nulla libero omnis autem suscipit.
                    Exercitationem, suscipit tenetur consequuntur perspiciatis,
                    dolorem sed vel dicta nostrum, molestiae dolores modi
                    perferendis natus. Provident error est incidunt? Optio
                    similique placeat qui vero, architecto est sed maxime quasi
                    laborum beatae, aperiam labore sequi magni assumenda ea
                    aliquid amet error sint aliquam veritatis necessitatibus
                    nostrum! Distinctio, tempore? Eos nisi nobis alias
                    cupiditate deserunt dolore maxime perferendis. Ullam
                    laboriosam mollitia iste blanditiis eligendi distinctio
                    fugiat doloremque corrupti omnis, praesentium sunt quasi in
                    asperiores harum facere at beatae, commodi natus quisquam
                    similique quod quos laborum rem quibusdam. Perspiciatis
                    aperiam optio doloremque molestiae repellat exercitationem
                    obcaecati blanditiis libero odio esse numquam harum, tenetur
                    ullam autem laboriosam quod nisi possimus veritatis
                    laudantium at? Nisi ipsam a, esse adipisci repudiandae
                    suscipit fuga perferendis quam, commodi veritatis porro
                    possimus impedit iure. Doloremque minima corporis
                    repudiandae, vero sequi molestias ratione! Consequatur eaque
                    facilis aut aliquam minus aperiam blanditiis laborum quis
                    suscipit, sapiente cumque corporis quo quibusdam officiis
                    modi, ipsum vitae dolorem, in voluptatibus ad? Fuga, ipsa?
                    Nostrum.
                </p>
            </div>
        </>
    );
}

export default App;
