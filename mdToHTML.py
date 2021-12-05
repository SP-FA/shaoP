import codecs, markdown

# 读取 markdown 文本
input_file = codecs.open("some_file.md", mode="r", encoding="utf-8")
text = input_file.read()

# 转为 html 文本
html = markdown.markdown(text)

# 保存为文件
output_file = codecs.open("some_file.html", mode="w", encoding="utf-8")
output_file.write(html)