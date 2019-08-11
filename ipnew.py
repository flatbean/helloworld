#coding=utf-8
'''
Created on Aug.12 2019
@author: flatbean@qq.com
Flatbean Software Studio.
使用方法 直接执行 （该版本是用于测试）
python 3.7.1 测试通过
该版本将中文网站的查询反馈数据也采用了json来处理，两个网站反馈的数据是不同的，中文站反馈的是一个“数组”，而英文站反馈的是一个“字典”。
'''
import sys
import requests

def main():

    url = 'http://freeapi.ipip.net/219.139.198.198'   #中文免费IP地址查询接口
    url2 = 'http://ip-api.com/json/219.139.198.198'   #外国网站IP地址查询接口
    response = requests.get(url)
    response2 = requests.get(url2)

    str=[]
    str=response.json()
    print("****************************************")
    print("国家：%s"%(str[0]))
    print("省份：%s"%(str[1]))
    print("城市：%s"%(str[2]))
    print("区域：%s"%(str[3]))
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

if __name__ == "__main__":
    main()