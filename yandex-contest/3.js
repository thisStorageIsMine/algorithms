/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
module.exports = function merge(nums1, m, nums2, n) {
    for (let i = m; i < (n + m); i++) {
        nums1[i] = nums2[i - m]
    }
    nums1.sort((a, b) => a - b);
}
