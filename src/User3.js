import React from 'react'
function User3(){
    return React.createElement('h1',null,'Creating without JSX')
    return React.createElement('div',null,React.createElement('h1',null,"It is inside the inner tag"))
}

export default User3;