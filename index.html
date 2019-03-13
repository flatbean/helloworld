#coding=utf-8
'''
Created on Dec.18 2018
@author: flatbean@qq.com
Flatbean Software Studio.
使用方法 python ip.py 219.139.198.198
python 3.7.1 测试通过
'''
import sys
import requests

def main(argv):

    url = 'http://freeapi.ipip.net/'   #中文免费IP地址查询接口
    url2 = 'http://ip-api.com/json/'   #外国网站IP地址查询接口
    args = sys.argv[1]
    url=url+format(args)
    url2 = url2 + format(args)
    response = requests.get(url)
    response2 = requests.get(url2)

    str=response.text.replace('\"','')
    str=str.replace('[','')
    str=str.replace(']','')
    str=str.replace(' ','')
    str=str.split(",")
    print("****************************************")
    print("您查询的IP地址 %s 来源地是："%args)
    print("国家：%s"%(str[0]))
    print("省份：%s"%(str[1]))
    print("城市：%s"%(str[2]))
    print("区域：%s"%(str[3]))
    str[4] = str[4].replace('\n', '')
    print("运营商：%s"%(str[4]))
    print("数据来源<www.ipip.net免费查询接口>")
    print("****************************************")
    strpp={}
    strpp=response2.json()
    print("\n")
    print("您查询的IP地址 %s 来源地是："%(strpp.get('query')))
    print("国家：%s"%(strpp.get('country')))
    print("城市：%s"%(strpp.get('city')))
    print("经纬度坐标：%s,%s"%(strpp.get('lat'),strpp.get('lon')))
    print("运营商编号：%s"%(strpp.get('as')))
    print("ISP服务商：%s"%(strpp.get('isp')))
    print("数据来源<www.ip-api.com免费查询接口>,\n程序设计：Flatbean Software Studio.")
    print("****************************************")
#    print(strpp.keys())
#    print(strpp.values())

if __name__ == "__main__":
    main(sys.argv)
