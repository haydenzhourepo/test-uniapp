import flyio from 'flyio'

flyio.config.timeout = 10000;

flyio.config.baseURL = 'http://mall-service.test/api/'
flyio.config.headers={accept:'application/json'}


//添加请求拦截器
flyio.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    // request.headers["X-Tag"]="flyio";
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
flyio.interceptors.response.use(
    (response) => {
        //只将请求结果的data字段返回
		console.log('Response' +response.data)
        return response.data
    },
    (error) => {
        //发生网络错误后会走到这里
		console.log("error" + error.response)
        return Promise.reject(error.response)
    }
)
export default flyio