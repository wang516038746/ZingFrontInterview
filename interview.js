// 题目1
// 解题思路
// 1.先将字符串转成 Object 形式
// 2.找出拥有公共长度的字符串的长度
// 3.根据获得的长度找公共字符串

// 多项字符串查找时间复杂度最坏情况O(n3)  如果只有两个语句最坏复杂度O(n2) 

let s = 'programming this is C programming text ';
let d = 'programming is a this text for C';
let x = 'test C is programming ceshi this text ';
let sObj = toObj(s);
let dObj = toObj(d);
let xObj = toObj(x);

let allLengthAry = clearNoSame([sObj, dObj, xObj]); // 相同的字数的数组
console.log(allLengthAry);
let result = findSameString([sObj, dObj, xObj], allLengthAry, 1); // 结果
console.log(result);

/**
 * 将传进来得字符串按照字符串长度转成对象
 *
 * @param {string} str
 * @returns
 */
function toObj(str) {
    let ary = str.split(' ');
    let result = {};
    ary.forEach(ele => {
        let length = ele.length;
        if (!result[length]) {
            result[length] = [];
        }
        result[length].push(ele);
    });
    return result;
}


/**
 * 找出公用的字数
 *
 * @param {*} ary
 * @returns
 */
function clearNoSame(ary) {
    let aryLength = ary.length; // 记录下总共传进来得数组的数量
    // 把所有数组含有的文字的数量添加到一个对象里面且记录添加进来几次
    let allLengthObj = {};
    ary.forEach(obj => {
        for (let i in obj) {
            if (!allLengthObj[i]) {
                allLengthObj[i] = 1
            } else {
                allLengthObj[i]++;
            }
        }
    })
    // 都重复的留下来
    for (let i in allLengthObj) {
        if (allLengthObj[i] !== aryLength) {
            delete allLengthObj[i];
        }
    }
    // 按照chrome浏览器对象创建规则 默认是根据数字顺序对属性排序首先遍历出来
    // 其他浏览器没有测试如果需要可以写个判定对数组排序即可暂时以v8引擎为准
    resultAry = Object.keys(allLengthObj);
    return resultAry;
}


/**
 * 找到结果
 *
 * @param {Array<obj>} objAry
 * @param {Array} numAry
 * @param {number} choiceNum
 * @returns
 */
function findSameString(objAry, numAry, choiceNum) {
    let currentChoice = 0; // 初始值与choiceNum比较用 choiceNum 调整可以改变寻找第几个重复的
    // 第一层循环根据取得的公共字数的数组找到当前字数
    for (let i = numAry.length - 1; i > 0; i--) {
        let num = numAry[i]; // 当前数字
        let firstObj = objAry[0];
        let currentStringAry = firstObj[num]; // 第一个对象当前数字的数组
        // 找出相同字符串
        for (let m = 0; m < currentStringAry.length; m++) {
            let currentString = currentStringAry[m]
            let allcu = true; // 循环下来如果该值为true 说明说明所有数组都有该值
            for (let k = 1; k < objAry.length; k++) {
                let otherAry = objAry[k];
                if (!otherAry[num].includes(currentString)) {
                    allcu = false;
                }
            }
            if (allcu) {
                if (choiceNum !== currentChoice) {
                    currentChoice++;
                    break;
                } else {
                    return currentString;
                }
            }
        }

    }
    return null;
}





// 题目2
// 解题思路
/** 
 * 等差数列公式 (首项 + 末项) * 项数 / 2
 * 该题的等差为 1 所以有 
 * 首项 m 
 * 项数 n 
 * 末项 m + n - 1
 * 和 num
 * 这样 num = (m + m + n - 1) * n / 2;
 * 2 * num = (2m + n - 1) * n
 * 只要一层循环n 得到符合上面式子的正整数m 就可以拿到答案
*/

let sum = 15;
function arithmetic(num) {
    let noHas = true;
    for(let m = 2; m <= num / 2; m ++) {
        let doubleN = (num * 2) / m + 1 - m; 
        if(doubleN > 0 && doubleN % 2 === 0) {
            noHas = false;
            // 此时的n
            let n = doubleN / 2;
            let str = '';
            for(let i = 0; i < m; i ++) {
                str += n + i + ' ';
            }
            console.log(str);
        }
    }
    if(noHas) {
        console.log(null) ;
    }
}
arithmetic(sum);