# data/websearch_raw.tsv -> 사용자 시트 형식 엑셀
import csv, os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from collect_hospitals import save_xlsx, HEADERS

here = os.path.dirname(os.path.abspath(__file__))
rows = []
seen = set()
for r in csv.DictReader(open(os.path.join(here, "websearch_raw.tsv"), encoding="utf-8"), delimiter="\t"):
    key = (r["회사명"], r["주소"])
    if key in seen:
        continue
    seen.add(key)
    memo = "웹검색 공개정보"
    if "확인필요" in r["주소"] or "인근" in r["주소"] or not r["주소"]:
        memo += " / 주소 확인필요"
    rows.append({
        "수집일자": "2026-09-29", "수집경로": "웹검색", "수집경로세부": "강남역 반경3km",
        "이름": r["이름"], "회사명": r["회사명"], "직책": r["직책"], "휴대폰": r["휴대폰"],
        "회사전화": r["회사전화"], "팩스": r["팩스"], "이메일": r["이메일"], "주소": r["주소"],
        "홈페이지": r["홈페이지"], "업종": r["업종"], "이메일수집메모": memo + " | 출처: " + r["출처"],
    })
rows.sort(key=lambda r: (not r["이메일"], not r["회사전화"], r["업종"], r["회사명"]))
out = os.path.join(os.path.dirname(here), "강남역_3km_병의원_웹검색_20260929.xlsx")
save_xlsx(rows, out, 3)
print(len(rows), "rows;", sum(1 for r in rows if r["이메일"]), "emails;", sum(1 for r in rows if r["회사전화"] or r["휴대폰"]), "phones ->", out)
