# 전생에 나는 뭐였을까? 🔮

앱인토스 앱 ID: `pastanimaltest`. 42개 질문에서 매회 12개 랜덤 출제, 동물 15종 GIF, 공유 및 결과 이미지 저장 기능.

## 자동 AIT 생성
GitHub > Actions > **Build Apps in Toss AIT**에서 실행하거나 main 브랜치에 푸시하면 빌드를 시도합니다. 성공 시 해당 실행 페이지 하단 **Artifacts > pastanimaltest-ait** ZIP을 다운로드하고 압축을 풀면 `pastanimaltest.ait`가 있습니다.

## 로컬
`npm ci` > `npm run check` > `npm run ait:build`

`granite.config.ts`의 앱 ID는 등록 ID와 일치합니다. PNG 아이콘은 이 저장소 `public/icon.png`에 있습니다. 실제 토스 앱 샌드박스 및 심사 테스트는 별도로 진행하세요. 토스 WebView에서는 이미지 저장 등 브라우저 API 지원 수준에 따라 추가 조정이 필요할 수 있습니다.
