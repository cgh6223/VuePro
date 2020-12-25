import {
  error
} from "jquery";

let myFunction = {
  copyData: function (object) {
    return JSON.parse(JSON.stringify(object));
  },
  sqlSplicing: function (ref) {
    let where = '1=1'
    const array = Object.keys(ref)
    array.forEach(key => {
      if (!this.isEmpty(ref[key].value)) {
        if (ref[key].op === 'eq') {
          where = where + ' and ' + key + '=' + ref[key].value
        } else if (ref[key].op === 'between') {
          where = where + ' and ' + key + 'in(' + ref[key].value + ',' + ref[key].value2 + ')'
        } else if (ref[key].op === 'like') {
          where = where + ' and ' + key + ' like ' + '%' + ref[key].value + '%'
        }
      }
    })
    return where
  },
  groupBy:function(list,fn){
    const groups={};
    list.forEach(element=>{
      let g=fn(element);
      if(groups[g]){
        groups[g].push(element);
      }else{
        groups[g]=[];
        groups[g].push(element);
      }
    })
    return groups;
  },
  sqlSplicingByBelong: function (ref) {
    let where = '1=1'
    let newarr=ref.filter(s=>{return })
    const array = Object.keys(ref)
    array.forEach(key => {
      if (!this.isEmpty(ref[key].value)) {
        if (ref[key].op === 'eq') {
          where = where + ' and ' + key + '=' + ref[key].value
        } else if (ref[key].op === 'between') {
          where = where + ' and ' + key + 'in(' + ref[key].value + ',' + ref[key].value2 + ')'
        } else if (ref[key].op === 'like') {
          where = where + ' and ' + key + ' like ' + '%' + ref[key].value + '%'
        }
      }
    })
    return where
  },
  isEmpty: function (str) {
    if ((/^undefined$/i).test(str) || (/^null$/i).test(str) || str === '') {
      return true;
    } else if (typeof str === 'object' && Object.keys(str).length === 0) {
      return true
    } else if (Array.isArray(str) && str.length === 0) {
      return true
    } else {
      var reg = /^\s*$/;
      return reg.test(str);
    }
  },
  getFinalData(jsonData, key) {
    if (!this.isEmpty(key) && key.indexOf('.') !== -1) {
      let arr = key.split('.');
      let obj = {};
      arr.forEach((r, i) => {
        if (i === 0 && !this.isEmpty(obj)) {
          obj = jsonData[r];
        } else if (!this.isEmpty(obj)) {
          obj = obj[r];
        }
      });
      return obj;
    } else {
      return jsonData[key]
    }
  },
  showPDF() {
    let routeData = this.$router.resolve({
      path: "/pdfview",
      query: {
        src: "test.pdf"
      }
    });
    window.open(routeData.href, "_blank");
  },
  getBirthdayAndAge(idCard) {
    let str1 = idCard.substr(6, 8)
    let str2 = str1.substr(0, 4) //年
    let str3 = str1.substr(4, 2) //月
    let str4 = str1.substr(6, 2) //日
    let birthday = str2 + '/' + str3 + '/' + str4
    let age = ''
    if (birthday) {
      let year = 1000 * 60 * 60 * 24 * 365;
      let now = new Date();
      let birth = new Date(birthday);
      age = parseInt((now - birth) / year);
    }
    return {
      birthday: birthday,
      age: age
    }
  },
  addDayToDate(date, day, vf, sep) {
    let valueFormat = 'date'
    if (vf) {
      valueFormat = vf
    }
    let separator = '/'
    if (sep) {
      separator = sep
    }
    let timestampToTime = function (timestamp) {
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + separator;
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + separator;
      let D = date.getDate();
      let h = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      if (valueFormat === 'date') {
        return Y + M + D/*+' '+ h + m + s*/;
      } else if (valueFormat === 'datetime') {
        return Y + M + D + ' ' + h + m + s;
      }

    }
    if (this.isEmpty(date)) {
      return ''
    }
    return timestampToTime(new Date(date).getTime() + day * 24 * 3600 * 1000)
  },
  toDate(date, {year, month, day}) {
    let timestampToTime = function (timestamp) {
      let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '/';
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
      let D = date.getDate() + ' ';
      let h = date.getHours() + ':';
      let m = date.getMinutes() + ':';
      let s = date.getSeconds();
      return Y + M + D /*+ h + m + s*/;
    }
    const time = new Date(date)
    let newYear = time.getFullYear()
    let newMonth = time.getMonth()
    let newDay = time.getDay()
    if (!this.isEmpty(year)) {
      newYear += year
    }
    if (!this.isEmpty(month)) {
      if (newMonth + month > 12) {
        newYear++
        newMonth = newMonth + month - 12
      } else {
        newMonth = newMonth + month
      }
    }
    if (!this.isEmpty(day)) {
      newDay += day
    }
    console.log(newYear, newMonth, newDay)
    return timestampToTime(new Date(newYear + '-' + newMonth + '-' + newDay).getTime())
  },
  findStr(arr, value) {
    //localStorage.setItem("findStr","");
    let returnValue = "";
    let that = this;

    arr.forEach((item, index) => {
      if (item.keyid == value) {
        returnValue = item.label;
        localStorage.setItem("findStr", returnValue);

      } else {
        if (item.children) {
          that.findStr(item.children, value);
        }
      }
    })
  },
  dynamicTime() {
    let t = null;
    t = setTimeout(time, 1000);//开始运行
    function time() {
      clearTimeout(t);//清除定时器
      const dt = new Date();
      const y = dt.getFullYear();
      const mt = dt.getMonth() + 1;
      const day = dt.getDate();
      const h = dt.getHours();//获取时
      const m = dt.getMinutes();//获取分
      const s = dt.getSeconds();//获取秒
      let date = "当前时间：" + y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
      t = setTimeout(time, 1000)//设定定时器，循环运行
      return date
    }

    return time()
  },
  countdownTime(endTime) {
    return timeDown()

    function timeDown() {
      const end = new Date(endTime).getTime()
      const curr = new Date().getTime()
      let leftTime = parseInt((end - curr) / 1000)
      const day = parseInt(leftTime / (24 * 60 * 60));
      const h = formate(parseInt(leftTime / (60 * 60) % 24));//获取时
      const m = formate(parseInt(leftTime / 60 % 60));//获取分
      const s = formate(parseInt(leftTime % 60));//获取秒
      //return day+'天'+h+'小时'+m+'分'+s+'秒'
      if (day > 0) {
        return day + '天'
      } else {
        return '0天'
      }

    }

    function formate(time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  },
};

export default myFunction
