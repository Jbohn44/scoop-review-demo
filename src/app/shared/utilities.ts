// url formatter, may need work.  need more test cases
export function formatUrl(url,...params) {
    if(params.length < 0){
      return url;
    }
    let args = params;
    if (params.length > 0) {
      for(let i = 0; i < params.length; i++){
        url = url.replace("{" + i + "}", params[i]);
      }

      return url;
    }
  }
  /** returns true if word is matched */
  export function matchTerm(arr: string[], term: string){


    for(let arrTerm of arr){
      arrTerm = arrTerm.trim();
      arrTerm = arrTerm.replace(" ", "");
      term = term.trim();
      term = term.replace(" ", "");
      if(arrTerm.toLowerCase() === term.toLowerCase()){
        return true;
      }
    }
    return false;
  }