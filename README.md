# LED 블로그 자동 생성 시스템

LED 조명 설치 업체를 위한 네이버 블로그 자동 생성 시스템입니다.

## 기능

- ✅ 엑셀 파일에서 설치 정보 자동 추출
- ✅ AI 기반 블로그 포스팅 자동 생성
- ✅ 정보성/사례형 포스팅 지원
- ✅ SEO 최적화 키워드 자동 포함

## 설치 방법

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/led-blog-generator.git
cd led-blog-generator
```

### 2. 패키지 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 입력하세요:
```
ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
```

### 4. 서버 실행
```bash
node server.js
```

브라우저에서 `http://localhost:3000` 접속

## Render.com 배포

1. GitHub에 저장소 생성
2. Render.com에서 New Web Service 생성
3. GitHub 저장소 연결
4. 환경 변수 설정:
   - `ANTHROPIC_API_KEY`: Anthropic API 키
   - `PORT`: 3000
5. Deploy!

## 사용 방법

1. 크롬 브라우저에서 접속
2. 엑셀 파일 업로드
3. 포스팅 유형 선택 (정보성/사례형)
4. 생성 버튼 클릭
5. 블로그 포스팅 완성!

## 기술 스택

- **Backend**: Node.js, Express
- **Frontend**: HTML, JavaScript
- **AI**: Anthropic Claude API

## 라이센스

Private Use Only
