@echo off
chcp 65001 >nul
cd /d "%~dp0"
python -m pip install -q requests openpyxl
if "%DATA_GO_KR_KEY%"=="" set /p DATA_GO_KR_KEY=공공데이터포털 인증키(Decoding)를 붙여넣으세요:
python collect_hospitals.py --key "%DATA_GO_KR_KEY%" --radius 3000
pause
