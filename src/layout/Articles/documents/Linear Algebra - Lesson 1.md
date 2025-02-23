# Linear Algebra - Lesson 1
## 2D线性坐标变换

变换后的**线性坐标**用\begin{bmatrix} x ^{\prime} \\\\ y^{\prime} \\\\ \end{bmatrix}表示
### 1. 缩放变换

以对角线的两个点为基准
缩放变换后的线性坐标矩阵式为：
$$\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
s_x & 0 \\\\
0 & s_y
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}
$$
### 2. 反射变换

以对角线的两个点为基准
反射变换后的线性坐标矩阵式为：
$$
\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
 -1 & 0  \\\\
 0 & -1
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}
$$
### 3. 切变变换

以对角线两个点为基准
以上横边为例
切变变换后的线性坐标矩阵式为：
$$
\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
1 & a  \\\\
 0 & 1
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}
$$
### 4. 旋转变换

只要不说旋转的具体细节，我们一般默认是**围绕原点(0,0)逆时针旋转**
以对角线的两个点为基准
旋转变换后的线性坐标矩阵式为：$$\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
\cos \theta & \sin \theta \\\\ 
-\sin \theta & \cos \theta 
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}$$
因此，我们注意到，**目前为止**
变换后的坐标都可以写成

$$
\begin{aligned}
x^{\prime} &= a x + b y \\\\
y^{\prime} &= a y + b x
\end{aligned}
$$

也就是
$$
\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
a & b \\\\ 
c & d
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}
$$
但**平移变换**有所不同，他的$x^{\prime}$理应是$x+x_{t}$，$y^{\prime}$理应是$y+y_{t}$，但却无法写作刚刚的矩阵式，
只能写成：
$$
\begin{bmatrix} 
x^{\prime} \\\\ 
y^{\prime} 
\end{bmatrix} =  
\begin{bmatrix} 
a & b \\\\ 
c & d
\end{bmatrix} 
\begin{bmatrix} 
x \\\\ 
y 
\end{bmatrix}
+
\begin{bmatrix} 
x_{t} \\\\ 
y_{t} 
\end{bmatrix}
$$
这里就得引入一个新的概念来统一矩阵式的写法，它就是**齐次坐标**

## 2D齐次坐标变换

为保证坐标矩阵表达式的统一性，我们引入一个$w$，
也就是写成$\begin{bmatrix} x \\\\ y \\\\ w \end{bmatrix}$，
当对象为点时，写成$\begin{bmatrix} x \\\\ y \\\\ 1 \end{bmatrix}$，
因为$p_{1} - p_{2} = v_{1}$，($p_{1}$与$p_{2}$为点，$v_{1}$为向量)
因此当对象为向量，写成$\begin{bmatrix} x \\\\ y \\\\ 0 \end{bmatrix}$，
当齐次坐标转换成线性坐标时，
$$
\begin{bmatrix} x \\\\ y \\\\ w \end{bmatrix}=\begin{bmatrix} \frac{x}{w} \\\\ \frac{u}{w} \end{bmatrix}
$$
所以齐次坐标有以下基本操作集：
$$
\begin{gather}
p_{1}-p_1=\begin{bmatrix} x_{1} \\\\ y_{1} \\\\ 1 \end{bmatrix}-\begin{bmatrix} x_{2} \\\\ y_{2} \\\\ 1 \end{bmatrix} = \begin{bmatrix} x_1-x_2 \\\\ y_1-y_2 \\\\ 0 \end{bmatrix} \Rightarrow{vector}
\\\\
v_1+v_2 = \begin{bmatrix} x_{1} \\\\ y_{1} \\\\ 0 \end{bmatrix}+\begin{bmatrix} x_{2} \\\\ y_{2} \\\\ 0 \end{bmatrix}=\begin{bmatrix} x_{1}+x_2 \\\\ y_{1}+y_2 \\\\ 0 \end{bmatrix} \Rightarrow{vector}
\\\\
p_1+p_2 = \begin{bmatrix} x_{1} \\\\ y_{1} \\\\ 1 \end{bmatrix}+\begin{bmatrix} x_{2} \\\\ y_{2} \\\\ 1 \end{bmatrix}=\begin{bmatrix} x_{1}+x_2 \\\\ y_{1}+y_2 \\\\ 2 \end{bmatrix} =\begin{bmatrix} \frac{x_{1}+x_2}{2} \\\\ \frac{y_{1}+y_2}{2} \end{bmatrix} \Rightarrow{point(middle)}
\\\\
p_1+v_1 = \begin{bmatrix} x_{1} \\\\ y_{1} \\\\ 1 \end{bmatrix}+\begin{bmatrix} x_{2} \\\\ y_{2} \\\\ 0 \end{bmatrix}=\begin{bmatrix} x_{1}+x_2 \\\\ y_{1}+y_2 \\\\ 1 \end{bmatrix} \Rightarrow{point}
\end{gather}
$$
### 1. 平移转换

以对角线的两个点为基准

平移变换后的齐次坐标矩阵式为：

\begin{bmatrix}
x_\prime \\\\
y_\prime \\\\
1
\end{bmatrix}
=
\begin{bmatrix}
a&b&x_t \\\\
c&d&y_t \\\\
0&0&1
\end{bmatrix}
\begin{bmatrix}
x \\\\
y \\\\
1
\end{bmatrix}
$$
### 2. 按任意点旋转转换

``` mermaid
graph TD
    A["T(-c)"] --> B("R(dig)")
    B --> C("T(c)")
```
因为旋转变换是围绕**原点(0,0)**
因此先将要表达式减去旋转变换的基点离原点(0,0)的距离
然后在平移基点离原点(0,0)的距离
## 问题

> 因为普遍旋转是按照原点进行逆时针旋转的和其他变换的种种因素，因此变换先后顺序改变会导致结果发生改变，这和**矩阵的乘法不能使用交换律**的本质是一样的