# 本地原始材料归档索引

[2026-11-14整理前清单](2026-11-14-pre-organization.json) 记录两个研究工作目录共212个文件的归档成员名、大小与SHA-256，包含网页、搜索响应、脚本、截图及当时的中间文件。原工作目录保留。

归档包位于 `research/.local/archives/2026-11-14-pre-organization.tar.gz`，不纳入 Git，不随网站发布。这是一份已逐文件核对的本地副本，尚非异地备份；清单文件不能代替归档包。

使用 `python scripts/check-research.py --local-archives` 校验归档。未来归档可执行：

```sh
python scripts/archive-research.py --batch YYYY-MM-DD-topic --source /path/to/source-directory
```

脚本拒绝覆盖同名批次，保留输入目录，并在归档包逐字节核对成功后写入清单。默认归档包放 `.local/archives/`，清单放 `research/archives/`；后续只将审阅过、可公开的资料另行纳入研究目录。

[4000项风物研究归档清单](2026-11-14-flavor-program-4000.json) 记录4370个保留文件，包含3346次查询的837批响应、公告PDF及提取文本、正文读取与失败记录、候选和批次脚本。归档包已逐成员核对，原件继续保留；存储层次同上。
