---
title: Create a draft in hexo
tags:
---

写作
```
$ hexo new [layout] <title>
```


```
hexo new draft "Create a draft in hexo"
```

draft（草稿），
作文容易，作好文难，

### 28.7.3 Binary search [alg.binary.search]
### 28.7.3 折半查找（二分查找）

1. - All of the algorithms in this section are versions of binary search and assume that the sequence being searched is partitioned with respect to an expression formed by binding the search key to an argument of the implied or explicit comparison function. They work on non-random access iterators minimizing the number of comparisons, which will be logarithmic for all types of iterators. They are especially appropriate for random access iterators, because these algorithms do a logarithmic number of steps through the data structure. For non-random access iterators they execute a linear number of steps.
   - 

#### 28.7.3.4 binary_search [binary.search]
```C++
template<class ForwardIterator, class T>
  bool binary_search(ForwardIterator first, ForwardIterator last, const T& value);
template<class ForwardIterator, class T, class Compare>
  bool binary_search(ForwardIterator first, ForwardIterator last, const T& value, Compare comp);
```
1. _Requires:_ The elements `e` of `[first, last)` are partitioned with respect to the expressions `e < value` and `! (value < e)` or `comp(e, value)` and `! comp(value, e)` . Also, for all elements `e` of `[first, last)`, `e < value` implies `! (value < e)` or `comp(e, value)` implies `! comp(value, e)`.
   
   _要求：_ 区间 `[first, last)` 中的元素 `e` 能被表达式 `e < value` 和 `! (value < e)` 或者 `comp(e, value)` 和 `! comp(value, e)` 划分。 对于区间 `[first, last)` 中的所有元素 `e` 来说， `e < value` 必然 `! (value < e)` 或者 `comp(e, value)` 必然 `! comp(value, e)`。

2. _Returns:_ `true` if there is an iterator `i` in the range `[first, last)` that satisfies the corresponding conditions: `! (*i < value) && ! (value < *i)` or `comp(*i, value) == false && comp(value, *i) == false`.

   _返回值：_ 如果返回 ` true`，则区间 `[first, last)` 中必然存在一个迭代器 `i` 满足相应条件：`! (*i < value) && ! (value < *i)` or `comp(*i, value) == false && comp(value, *i) == false`。
3. _Complexity:_ At most log 2 (last - first) + O(1) comparisons.
