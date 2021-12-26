module.exports = function({types}) {
    function includeKeyword(str,obj){
        for(let item in obj){
            if(str.includes(item)){
                return item;
            }
        }
        return ''
    }
    return {
        name:'babel-plugin-try',
        visitor:{
            Identifier(path,state){
                const match  = includeKeyword(path.node.name,state.opts);
                if(match){
                    path.node.name = path.node.name.replace(match,state.opts[match])
                }
            }
        }
    }
}