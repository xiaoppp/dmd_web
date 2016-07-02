import Q from 'q'
import $ from 'jquery'

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

export function showBigImg(src,isElement){
    if(isElement) src = $(src).attr('src')
    let template = `
    <div id="show_big_img"><dd style="background:url(`
    + src +
    `)  no-repeat center center"></dd></div>
    `
    $(template)
        .appendTo(document.body)
        .click(function(){
            $(this).remove()
        })
        .show()
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

export function duration(input){
    let t = parseInt(input)
    if(t < 0) return '00 : 00 : 00'
    else if(t < 60) return "00 : " + paddingLeft(t,'0',2)
    else if(input < 60 * 60) {
        let m = Math.floor(t / 60)
        let s = t % 60
        return paddingLeft(m,'0',2) + ' : ' + paddingLeft(s,'0',2)
    } else {
        let h = Math.floor(t / 3600)
        let m = Math.floor((t % 3600)/60)
        let s = (t % 3600) % 60
        return paddingLeft(h,'0',2) + ' : ' + paddingLeft(m,'0',2) + ' : ' + paddingLeft(s,'0',2)
    }
}

export function paddingLeft(n,m,l){
    let sn =  n.toString()
    let prefix = ''
    let len = l -sn.length
    for(let i = 0; i < len; i++) prefix += m
    sn = prefix + sn
    return sn
}