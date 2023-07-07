
//salvar um link no storage
export async function SaveLink(key, newLink) {      //recebe a chave e novo link como parametro
const linkStorage = await GetLink(key)        //colocar na variavel todos os links que ja tem com aquela chave

//se o newLink ja tiver um link igual ao mesmo id, não deixar duplicar

const hasLink = linkStorage.some(link => link.id === newLink.id)    //testa se o id do link é igual ao newLink, se for vdd retorna true
if (hasLink) {
alert('esse link ja existe')
return
}

//adicionar novo link ==

linkStorage.push(newLink)         //adiciona o valor do newlink a variavel
await localStorage.setItem(key, JSON.stringify(linkStorage))       //transforma em string e adiciona a variavel ao localstorage
}


//---------------------------------------------------------------------------------------------------------------------------------

//buscar um link no storage 
export async function GetLink(key) {                     //recebe chave como parametro
const myLinks = await localStorage.getItem(key)          //buscar o parametro e poe dentro da const
const linkSaves = JSON.parse(myLinks) || []              //converte para array se tiver ou nao tiver algum valor
return linkSaves                                         //retorna o valor que ela pediu em array
 
}

//-------------------------------------------------------------------------------------------------------------------------------------

//deletar um link no storage
export function DeleteLink(links, id) {
const MyLinks = links.filter( item => {
   return (item.id != id)               //retorna todos menos o id que mandou
})

localStorage.setItem('@DanDev', JSON.stringify(MyLinks))   //atualiza com o id removido
alert('link removido com sucesso!')

return MyLinks
}