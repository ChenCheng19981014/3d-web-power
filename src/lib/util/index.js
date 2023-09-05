import moment from "moment"


/**获取token */
export const getToken = () => localStorage.getItem("token")

/**
 * @description 设置token
 */
export const setToken = (token = '') => localStorage.setItem("token", token)


//dom滚动到指定位置
export const scrollTo = (element, top, duration) => {
    return new Promise(resolve=>{
        if( window.setTime){
            clearInterval(window.setTime)
        }
    
        window.onwheel=()=>{
            clearInterval(window.setTime)
    
        }
    
        // el.scrollTo(0,to)
        // if (duration <= 0) return;
        // const difference = to - el.scrollTop;
        // const perTick = difference / duration * 10;
        // setTimeout(() => {
        //     el.scrollTop = el.scrollTop + perTick;
        //     if (el.scrollTop === to) return;
        //     scrollTo(el, to, duration  );
        // }, 10);
        let scrollTop = element.scrollTop
    
        const step = function () {
            let distance = top - scrollTop;
    
            scrollTop = scrollTop + distance / 10;
            if (Math.abs(distance) < 1) {
                element.scrollTo(0, top);
                resolve()
            } else {
                element.scrollTo(0, scrollTop);
         window.setTime= setTimeout(step, 1);
            }
        };
        step();
    })
}

export const getDateToNewData = (time) => {
    time = new Date(time)
    var diff = '';
    var time_diff = new Date().getTime() - time; //时间差的毫秒数 

    //计算出相差天数 
    var days = Math.floor(time_diff / (24 * 3600 * 1000));
    if (days > 0) {
        diff += days + '天';
        return diff + "前"
    }
    //计算出小时数 
    var leave1 = time_diff % (24 * 3600 * 1000);
    var hours = Math.floor(leave1 / (3600 * 1000));
    if (hours > 0) {
        diff += hours + '小时';
        return diff + "前"

    } else {
        if (diff !== '') {
            diff += hours + '小时';
            return diff + "前"

        }
    }
    //计算相差分钟数 
    var leave2 = leave1 % (3600 * 1000);
    var minutes = Math.floor(leave2 / (60 * 1000));
    if (minutes > 0) {
        diff += minutes + '分钟';
        return diff + "前"

    } else {
        if (diff !== '') {
            diff += minutes + '分钟';
            return diff + "前"

        }
    }
    //计算相差秒数 
    var leave3 = leave2 % (60 * 1000);
    var seconds = Math.round(leave3 / 1000);
    if (seconds > 0) {
        diff += seconds + '秒';
        return diff + "前"

    } else {
        if (diff !== '') {
            diff += seconds + '秒';
            return diff + "前"

        }
    }
    if (!diff) {
        diff = "0秒"
    }
    return diff + "前"
}

export const setCookie = (usename, password, days) => {
    let date = new Date(); // 获取时间
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days); // 保存的天数
    window.document.cookie =
        `username =  ${usename};path=/;expires= ${date.toGMTString()}`;
    window.document.cookie = `password =  ${password};path=/;expires= ${date.toGMTString()}`;
}