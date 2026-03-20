# 内置函数手册

## 1、EOLINK APIkit 内置函数手册

### 全局变量

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取全部变量 | `eo.globals.all()` | 获取全局变量的全部内容 |
| 获取某个变量 | `eo.globals.get("param_key")` | 获取指定全局变量 |
| 设置某个变量 | `eo.globals.set("param_key","param_value")` | 设置全局变量 |
| 清除某个变量 | `eo.globals.unset("param_key")` | 删除指定全局变量 |
| 清除全部变量 | `eo.globals.clear()` | 清除所有全局变量 |

### 环境变量

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取全部变量 | `eo.env.envParam` | 获取环境变量的全部内容 |
| 获取某个变量 | `eo.env.param.get("param_key")` | 获取指定环境变量 |
| 设置某个变量 | `eo.env.param.set("param_key","param_value")` | 设置环境变量 |
| 清除某个变量 | `eo.env.param.unset("param_key")` | 删除指定环境变量 |
| 清除全部变量 | `eo.env.param.clear()` | 清除所有环境变量 |

### 用例临时变量（仅自动化测试）

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取全部 | `eo.case.caseParam` | 获取用例临时变量全部内容 |
| 获取某个变量 | `eo.case.param.get("param_key")` | 获取指定用例临时变量 |
| 设置某个变量 | `eo.case.param.set("param_key","param_value")` | 设置用例临时变量 |
| 清除某个变量 | `eo.case.param.unset("param_key")` | 删除指定用例临时变量 |
| 清除全部变量 | `eo.case.param.clear()` | 清除所有用例临时变量 |

### 数据集临时变量（仅自动化测试）

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取全部变量 | `eo.dc.dcParam` | 获取数据集临时变量全部内容 |
| 获取某个变量 | `eo.dc.param.get("param_key")` | 获取指定数据集临时变量 |
| 设置某个变量 | `eo.dc.param.set("param_key","param_value")` | 设置数据集临时变量 |
| 清除某个变量 | `eo.dc.param.unset("param_key")` | 删除指定数据集临时变量 |
| 清除全部变量 | `eo.dc.param.clear()` | 清除所有数据集临时变量 |

### 全局可用函数

| 操作 | 函数 | 备注 |
|------|------|------|
| 替换变量实际值 | `eo.replaceVariables()` | 用于替换给定参数中 `{{XX}}` 的变量为实际值。例如：<br>```javascript<br>eo.env.param.set("varB", "bValue")<br>const res = eo.replaceVariables({"b":"{{varB}}"})<br>eo.info(res) // 输出 {"b":"bValue"}<br>``` |


* API管理中可设置环境变量常量，在自动化测试中设置为数据集级别的临时环境变量。

* 变量优先级：数据集临时变量 > 用例临时变量 > 环境变量 > 全局变量

## 2、请求信息

### 请求地址 (URL)

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取URL（不包含环境的base url） | `eo.http.url.get()` | 获取不包含环境的 base URL |
| 获取替换变量后的 URL | `eo.http.url.parse()` | 获取 URL 中替换变量后的最终值 |
| 获取请求地址前缀 | `eo.env.http.baseUrl.get()` | 获取当前环境的 base URL |
| 设置URL | `eo.http.url.set("new_url")` | 设置新的请求 URL |

### 请求头部 (Header)

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取所有头部 | `eo.http.headerParam` | 输出整个请求头的 key 和 value，JSON 格式 |
| 获取某个头部 | `eo.http.header.get("param_key")` | 获取指定头部的 param_value |
| 新增某个头部 | `eo.http.header.set("param_key","param_value")` | 设置或新增请求头 |
| 移除某个头部 | `eo.http.header.unset("param_key")` | 删除指定头部 |
| 清空所有头部 | `eo.http.header.clear()` | 删除所有请求头 |
| 获取替换变量后的头部 | `eo.http.header.parse()` | 获取替换变量后的请求头参数和值 |

### Query 参数

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取所有Query参数 | `eo.http.queryParam` | 获取所有 query 参数 |
| 获取某个Query参数 | `eo.http.query.get("param_key")` | 获取指定 query 参数 |
| 新增某个Query参数 | `eo.http.query.set("param_key","param_value")` | 新增或修改 query 参数 |
| 移除某个Query参数 | `eo.http.query.unset("param_key")` | 删除 query 参数，删除后不会出现在地址栏中 |
| 清空所有Query参数 | `eo.http.query.clear()` | 清空所有 query 参数，删除后不会出现在地址栏中 |

### Rest 参数

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取所有Rest参数 | `eo.http.restParam` | 获取所有 Rest 参数 |
| 获取某个Rest参数 | `eo.http.rest.get("param_key")` | 获取指定 Rest 参数 |
| 设置某个Rest参数 | `eo.http.rest.set("param_key","param_value")` | 新增或修改 Rest 参数 |
| 移除某个Rest参数 | `eo.http.rest.unset("param_key")` | 删除指定 Rest 参数 |
| 清空所有Rest参数 | `eo.http.rest.clear()` | 清空所有 Rest 参数 |

### 请求方法

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取请求方法 | `eo.http.request.method()` | 获取当前请求的方法（GET、POST、PUT、DELETE 等） |

### 请求体 (Body)

| 操作 | 函数 | 备注 |
|------|------|------|
| 获取/设置所有请求体（JSON、XML 类型） | `eo.http.bodyParseParam` | 获取或设置 JSON 或 XML 类型的请求体 |
| 获取/设置所有请求体（Raw 类型） | `eo.http.bodyParam` | 获取或设置 Raw 类型请求体 |
| 获取变换变量后的请求体 | `eo.http.body.parse()` | 获取替换变量后的请求体参数和值 |

## 3、响应信息

| 模块      | 操作         | 函数 / 方法                                 | 说明                       |
|-----------|--------------|-------------------------------------------|----------------------------|
| 返回头部  | 获取所有返回头部 | `responseHeaders`                           | 获取所有返回头部            |
| 返回头部  | 获取某个返回头部 | `responseHeaders["param_key"]`              | 获取指定 key 的返回头部     |
| 返回头部  | 获取所有返回头部 | `eo.http.responseHeaderParam`               | 获取所有返回头部            |
| 返回头部  | 获取某个返回头   | `eo.http.responseHeader.get("param_key")`  | 获取指定 key 的返回头       |
| 返回头部  | 设置某个返回头   | `eo.http.responseHeader.set("param_key","param_value")` | 设置返回头部               |
| 返回头部  | 删除某个返回头   | `eo.http.responseHeader.unset("param_key")`| 删除指定返回头              |
| 返回头部  | 清空所有返回头   | `eo.http.responseHeader.clear()`           | 清空所有返回头              |
| 返回体    | 获取所有返回体   | `eo.http.responseParam`                     | 获取所有返回体              |
| 返回体    | 获取所有返回体   | `eo.http.response.get()`                    | 获取所有返回体              |
| 返回体    | 设置所有返回体   | `eo.http.response.set()`                    | 设置所有返回体              |

## 4、环境信息
以下函数中的http可换成websocket/socket/rpc，用于操作对应的环境中的协议配置

| 模块                  | 操作     | 函数 / 方法                                           | 备注                                     |
|-----------------------|----------|------------------------------------------------------|----------------------------------------|
| 协议的URL             | 获取     | `eo.env.http.baseUrl.get()`                          | 获取当前协议的 URL                      |
| 协议的URL             | 设置     | `eo.env.http.baseUrl.set("new_base_url")`           | 设置新的协议 URL                        |
| 协议的头部参数        | 获取     | `eo.env.http.header.get("param_key")`               | 获取指定 header 参数                     |
| 协议的头部参数        | 设置     | `eo.env.http.header.set("param_key","param_value")` | 设置指定 header 参数                     |
| 协议的头部参数        | 删除     | `eo.env.http.header.unset("param_key")`            | 删除指定 header 参数                     |
| 协议的头部参数        | 清空     | `eo.env.http.header.clear()`                        | 清空所有 header 参数                     |
| 协议的表单参数(仅HTTP)| 获取     | `eo.env.http.extraFormData.get("param_key")`       | 获取指定表单参数                         |
| 协议的表单参数(仅HTTP)| 设置     | `eo.env.http.extraFormData.set("param_key","param_value")` | 设置指定表单参数                  |
| 协议的表单参数(仅HTTP)| 删除     | `eo.env.http.extraFormData.unset("param_key")`     | 删除指定表单参数                         |
| 协议的表单参数(仅HTTP)| 清空     | `eo.env.http.extraFormData.clear()`                | 清空所有表单参数                         |
| 协议的Query           | 获取所有 | `eo.env.http.queryParam`                            | 获取所有 Query 参数                      |
| 协议的Query           | 获取     | `eo.env.http.query.get("param_key")`               | 获取指定 Query 参数                       |
| 协议的Query           | 设置     | `eo.env.http.query.set("param_key","param_value")` | 设置指定 Query 参数                       |
| 协议的Query           | 删除     | `eo.env.http.query.unset("param_key")`            | 删除指定 Query 参数，删除后不会出现在地址栏 |
| 协议的Query           | 清空     | `eo.env.http.query.clear()`                        | 清空所有 Query 参数                       |
| 额外 Rest             | 获取     | `eo.env.http.rest.get("param_key")`                | 获取指定 Rest 参数                        |
| 额外 Rest             | 设置     | `eo.env.http.rest.set("param_key","param_value")`  | 设置指定 Rest 参数                        |
| 额外 Rest             | 删除     | `eo.env.http.rest.unset("param_key")`             | 删除指定 Rest 参数                        |
| 额外 Rest             | 清空     | `eo.env.http.rest.clear()`                         | 清空所有 Rest 参数                        |


## 5、输入输出
| 模块 | 操作 | 函数 / 方法 | 备注 |
|------|------|-------------|------|
| 输出 | 输出信息 | `eo.info(data)` | 输出信息，data: 需要输出的信息，仅输出，不中止 |
| 输出 | 报断言失败并输出信息 | `eo.error(data)` | 输出信息不中止，但最后会报断言失败，data: 需要输出的信息 |
| 输出 | 中止并输出信息 | `eo.stop(data)` | 立即中止并输出信息，data: 需要输出的信息 |
| 输出 | 中止并返回结果 | `eo.throw_err(response)` | 立即中止并返回指定的返回结果，response: 返回内容 |
| 输入 | 插入内置文件 | `eo.file(fileType)` | 插入文件，可选类型：txt, doc, pdf, none |
| 输入 | 插入图片文件 | `eo.img(fileType)` | 插入图片，可选类型：jpg, png, gif |


## 6、加密/解密

| 模块       | 操作                  | 函数 / 方法                                                    | 备注 |
|------------|---------------------|---------------------------------------------------------------|------|
| MD5算法    | MD5加密              | `eo.md5(data)`                                                | data：待签名内容 |
| SHA算法    | SHA1加密             | `eo.sha1(data)`                                               | data：待签名内容 |
| SHA算法    | SHA224加密           | `eo.sha224(data)`                                             | data：待签名内容 |
| SHA算法    | SHA256加密           | `eo.sha256(data)`                                             | data：待签名内容 |
| SHA算法    | SHA384加密           | `eo.sha384(data)`                                             | data：待签名内容 |
| SHA算法    | SHA512加密           | `eo.sha512(data)`                                             | data：待签名内容 |
| HmacSHA算法 | HMAC-SHA1加密       | `eo.HmacSHA1(data,key,{hash:'base64'})`                       | data：待签名内容 key：密钥 hash: 输出编码(base64/hex) |
| HmacSHA算法 | HMAC-SHA224加密     | `eo.HmacSHA224(data,key,{hash:'base64'})`                     | 同上 |
| HmacSHA算法 | HMAC-SHA256加密     | `eo.HmacSHA256(data,key,{hash:'base64'})`                     | 同上 |
| HmacSHA算法 | HMAC-SHA384加密     | `eo.HmacSHA384(data,key,{hash:'base64'})`                     | 同上 |
| HmacSHA算法 | HMAC-SHA512加密     | `eo.HmacSHA512(data,key,{hash:'base64'})`                     | 同上 |
| RSA-SHA算法 | RSA-SHA1加密        | `eo.rsaSHA1(data,privateKey,[outputEncoding])`                | data：待签名内容 privateKey：密钥 outputEncoding：base64(默认)/hex |
| RSA-SHA算法 | RSA-SHA256加密      | `eo.rsaSHA256(data,privateKey,[outputEncoding])`              | 同上 |
| RSA 公钥   | RSA 公钥加密         | `eo.rsaPublicEncrypt(publicKey,data,[outputEncoding])`        | publicKey：公钥 data：待加密内容 outputEncoding：base64(默认)/hex |
| RSA 公钥   | RSA 公钥解密         | `eo.rsaPublicDecrypt(publicKey,data,[inputEncoding])`         | inputEncoding：待解密内容编码格式, base64(默认)/hex |
| RSA 私钥   | RSA 私钥加密         | `eo.rsaPrivateEncrypt(privateKey,data,[outputEncoding])`      | outputEncoding：结果编码格式, base64(默认)/hex |
| RSA 私钥   | RSA 私钥解密         | `eo.rsaPrivateDecrypt(privateKey,data,[inputEncoding])`       | inputEncoding：待解密内容编码格式, base64(默认)/hex |
| AES        | AES 加密             | `eo.aesEncrypt(data,password,[options])`                     | options: padding, mode, iv |
| AES        | AES 解密             | `eo.aesDecrypt(data,password,[options])`                     | options: padding, mode, iv |
| DES        | DES 加密             | `eo.desEncrypt(data,password,[options])`                     | options: padding, mode, iv |
| DES        | DES 解密             | `eo.desDecrypt(data,password,[options])`                     | options: padding, mode, iv |
| 国密算法   | SM2 获取密钥         | `sm2.generateKeyPairHex()`                                     | publicKey/privateKey 高级用法见章节 |
| 国密算法   | SM2 加密             | `sm2.doEncrypt(msgString, publicKey, cipherMode)`             | cipherMode：1~C1C2C3，默认为1 |
| 国密算法   | SM2 解密             | `sm2.doDecrypt(encryptData, privateKey, cipherMode)`          | 默认返回字符串 |
| 国密算法   | SM2 解密输出数组     | `sm2.doDecrypt(encryptData, privateKey, cipherMode, {output: 'array'})` | 输出数组 |
| 国密算法   | SM2 纯签名           | `sm2.doSignature(msg, privateKey)`                             | 生成椭圆曲线点 |
| 国密算法   | SM2 验签             | `sm2.doVerifySignature(msg, sigValueHex, publicKey)`          | 验证签名 |
| 国密算法   | SM2 获取椭圆曲线点   | `sm2.getPoint()`                                               | 可在 sm2 签名时传入 |
| 国密算法   | SM2 私钥生成公钥     | `sm2.getPublicKeyFromPrivateKey(privateKey)`                  | 根据私钥获取公钥 |
| SM3 算法   | 消息摘要             | `sm3('abc')`                                                   | 哈希算法，非加解密 |
| SM4        | SM4 加密             | `sm4.encrypt(msg, key)`                                       | 默认输出 16 进制，pkcs#7 填充 |
| SM4        | SM4 解密             | `sm4.decrypt(encryptData, key)`                               | 默认输出 utf8，pkcs#7 填充 |


## 7、编码/解码

| 模块   | 操作             | 函数 / 方法                        | 备注 |
|--------|----------------|----------------------------------|------|
| JSON   | 编码（序列化）   | `eo.json.encode(json_object)`     | 将对象编码为 JSON 字符串 |
| JSON   | 解码（反序列化） | `eo.json.decode(json_string)`     | 将 JSON 字符串解析为对象 |
| XML    | 编码（序列化）   | `eo.xml.encode(json_object)`      | 将对象编码为 XML 字符串 |
| XML    | 解码（反序列化） | `eo.xml.decode(json_string)`      | 将 XML 字符串解析为对象 |
| Base64 | 编码（序列化）   | `eo.base64.encode(json_object)`   | 将对象编码为 Base64 字符串 |
| Base64 | 解码（反序列化） | `eo.base64.decode(json_string)`   | 将 Base64 字符串解析为对象 |
| URL    | 编码（序列化）   | `eo.urlEncode(data)`              | URL 编码 |
| URL    | 解码（反序列化） | `eo.urlDecode(data)`              | URL 解码 |
| Gzip   | 压缩             | `eo.gzip.zip(data)`               | 使用 Gzip 压缩数据 |
| Gzip   | 解压             | `eo.gzip.unzip(data)`             | 使用 Gzip 解压数据 |
| deflate| 压缩             | `eo.deflate.zip(data)`            | 使用 deflate 压缩数据 |
| deflate| 解压             | `eo.deflate.unzip(data)`          | 使用 deflate 解压数据 |


## 8、Mock

| 操作                     | 函数 / 方法                   | 备注 |
|--------------------------|-------------------------------|------|
| 获取请求地址              | `eo.mock.apiUrl`              | 用于在高级 Mock JS 脚本中获取 API 文档中设置的 URL |
| Query 参数触发条件        | `eo.mock.queryParam`          | 获取“请求体触发条件”中的 Query 参数 |
| 请求头部触发条件          | `eo.mock.headerParam`         | 获取“请求体触发条件”中的请求头信息 |
| 请求体触发条件[对象]       | `eo.mock.bodyParseParam`      | 获取“请求体触发条件”中的表单、JSON 或 XML 格式的请求体 |
| 请求体触发条件[文本:Raw]  | `eo.mock.bodyParam`           | 获取“请求体触发条件”中的 Raw 格式请求体 |


## 9、获取自定义函数

| 操作                  | 函数 / 方法            | 备注 |
|-----------------------|-----------------------|------|
| 获取项目级自定义函数   | `eo.userFunction.`    | 在项目的公共资源-自定义函数列表中可查看所有项目级和空间级自定义函数 |
| 获取空间级自定义函数   | `eo.spaceFunction.`   | 在空间的公共资源-自定义函数列表中可查看所有空间级自定义函数 |


## 10、其他

| 操作                         | 函数 / 方法                             | 备注 |
|------------------------------|----------------------------------------|------|
| 睡眠                         | `eo.sleep()`                            | 暂停执行 |
| 跳过                         | `eo.skip()`                             | 不执行当前步骤，接口状态设为未执行 |
| 使用 JsonPath 提取内容        | `eo.jsonpath("jsonpath语句",data)`      | 提取 JSON 数据 |
| 使用 XPath 提取内容           | `eo.xpath("xpath语句",data)`            | 提取 XML 数据 |
| 解析 XML                      | `eo.xmlParse(data)`                     | 解析 XML 字符串 |
| 解析 JSON                     | `eo.jsonParse(data)`                    | 解析 JSON 字符串 |
| 检测无限循环                  | `eo.infiniteLoopDetector()`             | 检测是否存在无限循环 |
| 获取字段类型                  | `eo.typeof(data)`                        | data：需获取类型的字段 |
| 引入 Java 包                  | `eo.java.import("class_name")`          | class_name：Jar 包或 Class 名称 |
| 实例化 class 对象             | `eo.java.newInstanceSync("class_name")` | class_name：Jar 包或 Class 名称 |
| 执行 Beanshell 脚本           | `eo.execBsh("bsh_code")`                | bsh_code：返回内容存储在 vars 变量中 |
| 获取自动化用例 ID             | `eo.case.caseID`                         | 获取当前用例 ID |
| 获取自动化用例步骤 ID         | `eo.case.stepID`                         | 获取当前步骤 ID |
| 获取测试文件库文件             | `eo.filePath("文件ID")`                  | 需先上传到项目公共资源-测试文件库 |



# 请求API测试

| 操作                     | 函数 / 方法                 | 备注 |
|--------------------------|----------------------------|------|
| 发起请求                  | `eo.execute`              | 执行接口请求 |
| 执行前置脚本代码块        | `eo.executeBeforeCode`    | 接口执行前运行的脚本 |
| 执行后置脚本代码块        | `eo.executeAfterCode`     | 接口执行后运行的脚本 |

各请求体类型的调用示例如下：

### 1、请求体为Form-data类型示例

``` json
//定义需要测试的API
var formdata_api_demo_1 = {
    "url": "https://api.eolink.com", //[必填][string]请求地址,若不存在请求协议，默认http
    "name": "FORM-DATA API Demo", //[选填][string]，API名称，方便检索，不填则默认为系统生成API编号
    "method": "POST", //[选填][string],请求方式,可能值有[GET/POST/PUT/PATCH/DELETE/HEAD/OPTION],兼容大小写,默认为GET
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    }, //[选填][object],请求头部
    "bodyType": "form-data", //[选填][string],请求体类型
    "body": { //[选填][object],请求参数
        "param_1": "value_1",
        "param_2": "value_2"
    },

    "timelimit": 1000 //[选填],超时限制,单位为ms,超过时间则判断为请求失败，默认为1000ms
};
//执行请求，返回格式为{time:"请求时间",code:"HTTP状态码",response:"返回结果",header:"返回头部"}，
var formdata_api_demo_1_result = eo.execute(formdata_api_demo_1);
//判断返回结果
if (formdata_api_demo_1_result.response !== "") {
    eo.info("info_1"); //输出信息
} else {
    eo.info("info_2"); //输出信息
}
```
### 2、请求体为Json类型示例
``` json
//定义需要测试的API
var json_api_demo_2 = {
    "url": "https://api.eolink.com", //[必填][string]请求地址,若不存在请求协议，默认http
    "name": "JSON API Demo", //[选填][string]，API名称，方便检索，不填则默认为系统生成API编号
    "method": "POST", //[选填][string],请求方式,可能值有[GET/POST/PUT/PATCH/DELETE/HEAD/OPTION],兼容大小写,默认为GET
    "headers": {
        "Content-Type": "application/json"
    }, //[选填][object],请求头部
    "bodyType": "json", //[选填][string],请求体类型
    "body": { //[选填][object],请求参数
        "param_1": "value_1",
        "param_2": "value_2"
    },

    "timelimit": 1000 //[选填],超时限制,单位为ms,超过时间则判断为请求失败，默认为1000ms
};
//执行请求，返回格式为{time:"请求时间",code:"HTTP状态码",response:"返回结果",header:"返回头部"}，
var json_api_demo_2_result = eo.execute(json_api_demo_2);
//判断返回结果
if (json_api_demo_2_result.response !== "") {
    eo.info("info_1"); //输出信息
} else {
    eo.info("info_2"); //输出信息
}
```
### 3、请求体为XML类型示例
``` json
//定义需要测试的API
var xml_api_demo_1 = {
    "url": "https://api.eolink.com", //[必填][string]请求地址,若不存在请求协议，默认http
    "name": "XML API Demo", //[选填][string]，API名称，方便检索，不填则默认为系统生成API编号
    "method": "POST", //[选填][string],请求方式,可能值有[GET/POST/PUT/PATCH/DELETE/HEAD/OPTION],兼容大小写,默认为GET
    "headers": {
        "Content-Type": "application/xml"
    }, //[选填][object],请求头部
    "bodyType": "xml", //[选填][string],请求体类型
    "body": { //[选填][object],请求参数
        "root": {
            "book":[
                {
                    "name":"eolinker_book_1"
                },
                {
                    "name":"eolinker_book_2"
                }
            ]
        }
    },

    "timelimit": 1000 //[选填],超时限制,单位为ms,超过时间则判断为请求失败，默认为1000ms
};
//执行请求，返回格式为{time:"请求时间",code:"HTTP状态码",response:"返回结果",header:"返回头部"}，
var xml_api_demo_1_result = eo.execute(xml_api_demo_1);
//判断返回结果
if (xml_api_demo_1_result.response !== "") {
    eo.info("info_1"); //输出信息
} else {
    eo.info("info_2"); //输出信息
}
```
### 4、请求体为Raw类型示例
``` json
//定义需要测试的API
var raw_api_demo_1 = {
    "url": "https://api.eolink.com", //[必填][string]请求地址,若不存在请求协议，默认http
    "name": "RAW API Demo", //[选填][string]，API名称，方便检索，不填则默认为系统生成API编号
    "method": "POST", //[选填][string],请求方式,可能值有[GET/POST/PUT/PATCH/DELETE/HEAD/OPTION],兼容大小写,默认为GET
    "headers": {
        "Content-Type": "text/plain"
    }, //[选填][object],请求头部
    "bodyType": "raw", //[选填][string],请求体类型
    "body": "hello world",

    "timelimit": 1000 //[选填],超时限制,单位为ms,超过时间则判断为请求失败，默认为1000ms
};
//执行请求，返回格式为{time:"请求时间",code:"HTTP状态码",response:"返回结果",header:"返回头部"}，
var raw_api_demo_1_result = eo.execute(raw_api_demo_1);
//判断返回结果
if (raw_api_demo_1_result.response !== "") {
    eo.info("info_1"); //输出信息
} else {
    eo.info("info_2"); //输出信息
}
```

# 国密算法（高级用法）
### 1、SM2
获取密钥
``` json
let keypair = sm2.generateKeyPairHex()
publicKey = keypair.publicKey // 公钥
privateKey = keypair.privateKey // 私钥
// 默认生成公钥 130 位太长，可以压缩公钥到 66 位
sm2.comparePublicKeyHex(publicKey, compressedPublicKey) // 判断公钥是否等价
// 自定义随机数，参数会直接透传给 jsbn 库的 BigInteger 构造器
// 注意：开发者使用自定义随机数，需要自行确保传入的随机数符合密码学安全
let keypair2 = sm2.generateKeyPairHex('123123123123123')
let keypair3 = sm2.generateKeyPairHex(256, SecureRandom)
let verifyResult = sm2.verifyPublicKey(publicKey) // 验证公钥
verifyResult = sm2.verifyPublicKey(compressedPublicKey) // 验证公钥
```
加密解密

``` json
const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1
let encryptData = sm2.doEncrypt(msgString, publicKey, cipherMode) // 加密结果
let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode) // 解密结果
encryptData = sm2.doEncrypt(msgArray, publicKey, cipherMode) // 加密结果，输入数组
decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode, {output: 'array'}) // 解密结果，输出数组
```
签名验签
``` json
// 纯签名 + 生成椭圆曲线点
let sigValueHex = sm2.doSignature(msg, privateKey) // 签名
let verifyResult = sm2.doVerifySignature(msg, sigValueHex, publicKey) // 验签结果
// 纯签名
let sigValueHex2 = sm2.doSignature(msg, privateKey, {
    pointPool: [sm2.getPoint(), sm2.getPoint(), sm2.getPoint(), sm2.getPoint()], // 传入事先已生成好的椭圆曲线点，可加快签名速度
}) // 签名
let verifyResult2 = sm2.doVerifySignature(msg, sigValueHex2, publicKey) // 验签结果
// 纯签名 + 生成椭圆曲线点 + der编解码
let sigValueHex3 = sm2.doSignature(msg, privateKey, {der: true,}) // 签名
let verifyResult3 = sm2.doVerifySignature(msg, sigValueHex3, publicKey, {
    der: true,
 }) // 验签结果

// 纯签名 + 生成椭圆曲线点 + sm3杂凑
let sigValueHex4 = sm2.doSignature(msg, privateKey, {
    hash: true,
}) // 签名
let verifyResult4 = sm2.doVerifySignature(msg, sigValueHex4, publicKey, {
    hash: true,
}) // 验签结果
// 纯签名 + 生成椭圆曲线点 + sm3杂凑（不做公钥推导）
let sigValueHex5 = sm2.doSignature(msg, privateKey, {
    hash: true,
    publicKey, // 传入公钥的话，可以去掉sm3杂凑中推导公钥的过程，速度会比纯签名 + 生成椭圆曲线点 + sm3杂凑快
})
let verifyResult5 = sm2.doVerifySignature(msg, sigValueHex5, publicKey, {
    hash: true,
     publicKey,
})
// 纯签名 + 生成椭圆曲线点 + sm3杂凑 + 不做公钥推 + 添加 userId（长度小于 8192）
// 默认 userId 值为 1234567812345678
let sigValueHex6 = sm2.doSignature(msgString, privateKey, {
    hash: true,

    publicKey,userId: 'testUserId',
})
let verifyResult6 = sm2.doVerifySignature(msgString, sigValueHex6, publicKey, {
    hash: true,
    userId: 'testUserId',
})
```
### 2、SM3
``` json
let hashData = sm3('abc') // 杂凑
// hmac
hashData = sm3('abc', {
    key: 'daac25c1512fe50f79b0e4526b93f5c0e1460cef40b6dd44af13caec62e8c60e0d885f3c6d6fb51e530889e6fd4ac743a6d332e68a0f2a3923f42585dceb93e9', // 要求为 16 进制串或字节数组
})
```
### 3、SM4
加密
``` json
const msg = 'hello world! ' // 可以为 utf8 串或字节数组
const key = '0123456789abcdeffedcba9876543210' // 可以为 16 进制串或字节数组，要求为 128 比特
let encryptData = sm4.encrypt(msg, key) // 加密，默认输出 16 进制字符串，默认使用 pkcs#7 填充（传 pkcs#5 也会走 pkcs#7 填充）
let encryptData = sm4.encrypt(msg, key, {padding: 'none'}) // 加密，不使用 padding
let encryptData = sm4.encrypt(msg, key, {padding: 'none', output: 'array'}) // 加密，不使用 padding，输出为字节数组
let encryptData = sm4.encrypt(msg, key, {mode: 'cbc', iv: 'fedcba98765432100123456789abcdef'}) // 加密，cbc 模式
```
解密
``` json
const encryptData = '0e395deb10f6e8a17e17823e1fd9bd98a1bff1df508b5b8a1efb79ec633d1bb129432ac1b74972dbe97bab04f024e89c' // 可以为 16 进制串或字节数组
const key = '0123456789abcdeffedcba9876543210' // 可以为 16 进制串或字节数组，要求为 128 比特
let decryptData = sm4.decrypt(encryptData, key) // 解密，默认输出 utf8 字符串，默认使用 pkcs#7 填充（传 pkcs#5 也会走 pkcs#7 填充）
let decryptData = sm4.decrypt(encryptData, key, {padding: 'none'}) // 解密，不使用 padding
let decryptData = sm4.decrypt(encryptData, key, {padding: 'none', output: 'array'}) // 解密，不使用 padding，输出为字节数组
let decryptData = sm4.decrypt(encryptData, key, {mode: 'cbc', iv: 'fedcba98765432100123456789abcdef'}) // 解密，cbc 模式
```

# crypto加密算法
脚本编辑器内置crypto算法依赖包，支持直接调用crypto加密算法

``` json
// 1. 生成随机的密钥和初始化向量
const generateKeyAndIV = () => {
  const key = crypto.randomBytes(32); // 32字节密钥
  const iv = crypto.randomBytes(16);  // 16字节初始化向量
  return { key, iv };
};
// 2. 加密函数
const encrypt = (text, key, iv) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};
// 3. 解密函数
const decrypt = (encryptedText, key, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};
// 示例用法
const plaintext = 'Hello, this is a secret message!';
eo.info(plaintext);
// 生成密钥和初始化向量
const { key, iv } = generateKeyAndIV();
// 加密
const encryptedText = encrypt(plaintext, key, iv);
eo.info(encryptedText);
// 解密
const decryptedText = decrypt(encryptedText, key, iv);
eo.info(decryptedText);
```



