let url="https://api.dictionaryapi.dev/api/v2/entries/en/";


async function getMeaning(){
    try{
        let res=await axios.get(url);
        console.log(res);

    }catch(e){
        return "couldn't found word ";
    }
}