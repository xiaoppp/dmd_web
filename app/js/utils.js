import Q from 'q'

export function alert2(msg){

    var defered = Q.defer()
    var template = `
	    <div>
		    <h5><b>提示信息！</b></h5>
		    <p><span>`
            + msg +
            `</span></p>
		    <dd><button>确&nbsp;定</button></dd>
	    </div>
    `

    var div = document.createElement('div')
    div.setAttribute('id',"show_alert")
    div.style.display = 'block'
    div.innerHTML = template
    var btn = div.children[0].children[2].children[0]
    
    if(btn.onclick) btn.onclick = _close
    else if(btn.attachEvent) btn.attachEvent('onclick',_close)
    else if(btn.addEventListener) btn.addEventListener('click',_close)
    else { throw new Error("no click event handler can be bound.") }
    
    document.body.appendChild(div)
    
    function _close(){
        document.body.removeChild(div)
        defered.resolve('close')
    }

    return defered.promise
}

export function queryValue(name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}
