addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


const setCache = (key, data) => FAVORITES.put(key, data)
const getCache = (key) => FAVORITES.get(key)
const corsHeaders = {
  'Content-Type': 'text/JSON',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*', 
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


async function handleRequest() {
        const cache = await getCache('halloween')
        let parse = JSON.parse(cache)
        let selected = parse[getRandomInt(parse.length)];
        
         return new Response(JSON.stringify(selected), {
            headers: corsHeaders,
  })
    }

    if (path ==='leaderboard'){
         const cache = await getCache('leaderboard')
        let parse = JSON.parse(cache)
        
         return new Response(JSON.stringify(parse), {
            headers: corsHeaders,
  })
    }

    if (path ==='update'){
        const cache = await getCache('leaderboard')
        let parseCache = JSON.parse(cache)

        let res = JSON.stringify(await request.json());
        let parseRes = JSON.parse(res)

        let {update, id} = parseRes
        if (update == 'add'){
          index = parseCache.findIndex((obj => obj.id == id));
          parseCache[index].count += 1;
          //setCache('leaderboard',JSON.stringify(parseCache));
        }
        if (update == 'subtract'){
          index = parseCache.findIndex((obj => obj.id == id));
          parseCache[index].count -= 1;
          //setCache('leaderboard',JSON.stringify(parseCache);
        }

         return new Response(JSON.stringify(parseCache), {
            headers: corsHeaders,
  })
    }


    return new Response(JSON.stringify('No endpoint used!'), {
    headers: corsHeaders,
  })
