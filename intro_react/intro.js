/*
Componentes React são funções JavaScript
Os parâmetros de um tag, são agredados pelo React 
tudos juntos dentro de um único parâmetros (props).
Assim, todos os parâmetros são acessados pele propos
que é um objeto JavaScript.

Tudo no React é um componente, um dentro do outro, da mesma
forma que um layout clássico HTML.

Um componente pode guardar memória dentro dele, ou seja,
podemos implementar um contador, manter dado guardado em memório, etc...

Em react, a forma de passar js para dentro da parte visual, tem que ser
por interpolação {}

userState: Usar hook(se enganchar), ou seja, quando algo acontecer, 
atualiza o valor daquela variável

import { useState } from 'react
const [contador, setContador] = useState(1): A função setContador fica grudado
ao contator, ou seja, sempre que ele atualizar, o React é informado 
e ativa a função que atualiza a interface

*/