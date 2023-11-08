// Note:  Please do not change the prewritten code

const mathFile = require('./math.js')

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];
    const sumTotal = mathFile.sum(nums)
    const meanTotal = mathFile.mean(nums)

    console.log("The sum is "+sumTotal)
    console.log("The mean is "+meanTotal)


};
Solution();
module.exports = Solution;
