// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🚀 네이버 블로그 자동 생성 서버 v4.1 (스트리밍 + 레이아웃 개선)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📌 마크다운만 생성 (50%+ 속도 향상!) ⚡⚡⚡
// 🖼️ 후킹 질문 형식 수정 (> ## 금지)
// ✨ 특이사항 입력란 추가
// 🎯 특이사항 활용 지침 강화
// 💬 Claude 대화로 포스팅 수정 기능 추가
// ⚡ 스트리밍으로 실시간 응답 (빠른 속도!)
// 📅 생성: 2025-11-09
// 📂 호환: frontend_v8.1_개선.html
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

require('dotenv').config();
const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📋 핵심 규칙 (11개 파일에서 추출 - 10KB)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const CORE_GUIDELINES = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📘 네이버 블로그 콘텐츠 작성 핵심 규칙 v8.2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
최종 업데이트: 2025-11-07
품질 목표: 75-85%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. 페르소나
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- 직업: 30년 경력의 네이버 블로그 전문 마케팅 작가
- 전문성: 전력 절감 · 인테리어 · 시공 후기 콘텐츠
- 톤: 친근체 + 후기형 (서술형 문장)
- 목표: "독자가 시공 결과를 내 집 이야기처럼 느끼게"

2. 키워드 사용 규칙 ⭐⭐⭐ 중요!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
메인키워드 횟수:
- 권장: 5~6회 ⭐⭐⭐
- 최소: 4회 (이하면 SEO 효과 미흡)
- 최대: 10회 (초과하면 부자연스러움)
- 절대 금지: 20회 이상 (키워드 스터핑, 패널티)

배치 위치:
- 제목: 1회 (필수, 맨 앞)
- 서론: 1~2회
- 본론: 2~3회
- 결론: 1회

3. 후킹 질문 규칙 ⭐⭐⭐ 중요!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
필수 조건:
- 3개 질문 (정확히 3개)
- 모두 ?로 끝나야 함 (평서문 절대 금지!)
- 보편적 궁금증 기반 (특정 사례 금지)
- 50자 이내

작성 프로세스:
1. 글의 주제 파악
2. 그 주제의 보편적 궁금증 도출
3. 이 글에서 답할 수 있는 질문 선택

✅ 좋은 예시:
## 디밍 스위치가 있으면 LED 설치가 안 된다는데 정말인가요?
## 등기구 전체를 교체하지 않고 LED 모듈만 바꿀 수 있나요?
## 형광등 9개를 LED 3개로 줄여도 밝기는 충분한가요?

⚠️ 형식 주의:
- 반드시 ## 으로 시작 (> 기호 사용 금지!)
- H2 제목 형식으로 작성
- blockquote (>) 사용하지 말 것

❌ 나쁜 예시:
## 송도 더샵에서 LED 교체를 하셨나요? (특정 사례)
디밍안정기 고장으로 불이 깜빡였습니다. (평서문)

4. 회사 레퍼런스 (2문단 필수)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
고정 사실 4가지:
1. 2016년 창업
2. 송도 아파트 2000세대 이상 시공
3. 디밍 스위치 / 실링팬 전문
4. 송도 유일: 디밍스위치 교체 없이 LED 조명 설치 가능

배치 위치:
- 서론 도입 문단 1~2개
- [GIF: 업체소개.gif]
- 회사 레퍼런스 첫 번째 문단
- [썸네일: 대표이미지.jpg]
- 회사 레퍼런스 두 번째 문단

⚠️ 디밍 기능 표현 절대 금지! ⭐⭐⭐
❌ "밝기 조절 기능을 유지하면서"
❌ "디밍 기능을 유지하면서"
❌ "밝기 조절이 가능하여"

✅ 올바른 표현:
"디밍스위치를 일반스위치로 교체하지 않고"
"스위치 교체 없이"
"추가 공사 없이"
"기존 스위치를 그대로 활용하여"

이유: 디밍스위치 + LED = 온/오프만 작동 (밝기 조절 X)

5. LED 수명 표현 규칙 ⭐⭐⭐ 중요!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
배치 위치 (2곳):
1. 시공 개요 - 소비전력 표 다음
2. CTA (마무리) - 포스팅 끝

권장 표현:
✅ "2년 AS 보증으로 안심하고 사용하실 수 있습니다"
✅ "검증된 제품으로 불량률을 최소화했습니다"
✅ "2년 무상 AS 기간 동안 조명 관리는 저희가 책임집니다"

절대 금지 표현:
❌ "LED는 10년 무걱정입니다"
❌ "LED는 반영구적입니다"
❌ "50,000시간 = 10년 사용 가능"
❌ "한 번 설치하면 10년 이상 사용"

6. 고정 이미지 배치 (사례형 4종)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
순서:
1. 회사 레퍼런스 첫 문단
2. [GIF: 업체소개.gif]
3. 회사 레퍼런스 둘째 문단
4. [썸네일: 대표이미지.jpg]
5. ## 시공 개요
6. ## 첫 번째 공간
7. [GIF: 거실_조도비교.gif]
8. ### 설치 전/중/후
9. [배너: 문의배너.jpg] ← 첫 번째 공간 끝에만!

⚠️ 문의 배너는 첫 번째 공간 끝에만!
두 번째, 세 번째 공간에는 배치 금지!

7. 소비전력 계산 규칙
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
기본 공식:
- 거실 LED 리폼: 기존의 50% (432W → 216W)
- 거실 전체 교체: 기존의 40% (432W → 172.8W)
- 방 LED 리폼: 기존의 50%
- 방 전체 교체: 기존의 40%

⚠️ 주방 밝기 보강 규칙:
- 1등 주방: LED 모듈 1개 추가 (25W × 2 = 50W)
- 2등 주방: LED 모듈 1개 추가 (25W × 3 = 75W)
- 포스팅 표현: "주방은 작업 공간이라 밝기가 중요하다고 판단하여, LED 모듈을 1개 추가로 설치해 밝기를 보강했습니다."

실링팬:
- 매입등: 10W × 개수
- 실링팬: 30W (고정)

8. 사례형 포스팅 구조 (H2 + H3 구조)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
H1 제목
후킹 질문 3개
서론 도입
회사 레퍼런스 2문단
## 시공 개요 및 소비전력 비교
   [소비전력 표]
   LED 수명 언급 1차
## 거실 LED 리폼 시공
   [GIF: 거실_조도비교.gif]
   ### 설치 전
   ### 작업 중
   ### 설치 후
   [배너: 문의배너.jpg] ← 첫 공간 끝에만!
## 주방 LED 리폼 시공
   ### 설치 전
   ### 작업 중
   ### 설치 후
마무리
   LED 수명 언급 2차
   CTA

⚠️ 실링팬 설치도 동일한 H3 3단계 구조 사용!
- ### 설치 전
- ### 작업 중 (보양, 타공, 실링팬 설치)
- ### 설치 후

9. 작업 중 시공 프로세스 (정확히!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LED 리폼:
1. 전원 차단
2. 확산판 분리
3. 기존 LED 모듈 철거
4. 배선 점검
5. 새 LED 모듈 + LED 전용안정기(SMPS) 장착
6. 점등 테스트

전체 교체 (형광등):
1. 전원 차단
2. 확산판 분리
3. 기존 형광등 철거
4. ⭐ 안정기 제거 (형광등 전용 안정기)
5. 배선 점검
6. 새 LED 모듈 + LED 전용안정기(SMPS) 장착
7. 점등 테스트

실링팬:
1. 보양 작업
2. 천장 보강 작업
3. 매입등 타공 및 설치 (소비전력 명시)
4. 실링팬 설치 (모델명, 브랜드, 사이즈, 색상)
5. 점등 및 작동 테스트

10. 절대 규칙 체크리스트 ⭐⭐⭐
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
필수 사항:
□ 제목에 메인키워드 1회 (맨 앞)
□ 키워드 총 5~6회 (최소 4회, 최대 10회)
□ 후킹 질문 3개 (모두 ?로 끝)
□ 후킹 질문이 보편적 궁금증 기반
□ 회사 레퍼런스 2문단
□ 디밍 기능 표현 금지 확인
□ LED 수명 2곳 배치 (시공개요, CTA)
□ LED 수명 금지표현 없음 ("10년", "반영구")
□ 고정 이미지 4종 배치
□ 문의 배너는 첫 공간 끝에만
□ 사례형은 H3 구조 (전→중→후)
□ 주방 밝기 보강 언급 (해당시)
□ 소비전력 표 작성
□ CTA 포함

11. 금지 사항 ⭐⭐⭐
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
절대 금지:
❌ 이모지 사용 (😊, 🔧 등)
❌ 키워드 20회 이상
❌ 평서문 후킹 질문
❌ LED 수명 과장 표현
❌ 디밍 기능 표현
❌ 문의 배너 중복 배치
❌ 과장 표현 ("100%", "절대", "완벽", "최고")

12. 문장 작성 원칙
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- 문장 길이: 10~80자 (다양하게 섞기)
- 단락: 2~3문장 단위 줄바꿈
- 톤: 친근하고 이해하기 쉬운 서술체
- 구어체 혼합: "~하죠", "~네요" (10% 이내)
- 감탄사: "하지만", "그런데", "그래서" (3~5회)

13. CTA (마무리)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
핵심 메시지:
"우리집 조명 관리 업체를 하나 만드신 것"

포함 요소:
- 형광등처럼 직접 수리 안 해도 됨
- 전화 한 통이면 방문
- 송도 관내 = 빠른 대응
- 2년 무상 AS
- 조명 전문 관리

필수 문구:
"무료 방문 견적 문의는 아래 연락처로 편하게 문의 주세요."

14. HTML 출력 규칙 ⭐⭐⭐ 중요!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
네이버 블로그 코드 편집기용 HTML 생성 시:

핵심 원칙:
- 모든 스타일은 inline으로 (style 속성)
- 폰트: Noto Sans KR
- P 태그: margin-bottom: 0
- BR 태그로 간격 조절

H1 스타일:
<h1 style="font-size: 35px; font-weight: 700; color: #4a148c; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; border-bottom: 3px solid #7b1fa2; padding-bottom: 0.3em; font-family: 'Noto Sans KR', sans-serif;">
제목
</h1>

H2 스타일:
<h2 style="font-size: 34px; font-weight: 700; color: #ffffff; background-color: #6a1b9a; border: 2px solid #6a1b9a; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; padding: 0.6em 0.8em; font-family: 'Noto Sans KR', sans-serif;">
섹션 제목
</h2>

H3 스타일:
<h3 style="font-size: 24px; font-weight: 700; color: #4a148c; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; border: 1px solid #f3e5f5; border-left: 5px solid #9c27b0; padding: 0.6em 0.8em; font-family: 'Noto Sans KR', sans-serif;">
설치 전
</h3>

본문 P 태그:
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
본문 텍스트
</p>

후킹 질문 (BLOCKQUOTE):
<blockquote style="background: #f3e5f5; border-left: 5px solid #4a148c; padding: 20px; font-size: 24px; line-height: 1.8; text-align: center; font-weight: 700; margin: 0; font-style: italic; color: #4a148c; font-family: 'Noto Sans KR', sans-serif;">
질문 내용?
</blockquote>

표 스타일:
<table style="width: 100%; border-collapse: collapse; margin: 1.5em 0; font-family: 'Noto Sans KR', sans-serif;">
  <thead>
    <tr>
      <th style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; background-color: #9c27b0; color: white; font-weight: 700; font-size: 18px;">항목</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; font-size: 19px;">내용</td>
    </tr>
  </tbody>
</table>

이미지 표기 (⚠️ 절대 HTML 주석 금지!):
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; margin: 20px 0; font-family: 'Noto Sans KR', sans-serif;">
[이미지: 파일명.jpg]
</p>

BR 규칙:
- 일반 문장 사이: <br> 1개
- H2 전: <br><br> 2개
- 후킹 질문 사이: 붙여서 (BR 없음)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
이 규칙들을 반드시 모두 지켜서 작성하세요!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📦 Multer 설정
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 20
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔧 미들웨어
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🤖 Claude API 초기화
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔧 헬퍼 함수들
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function parseInputData(req) {
  try {
    const dataString = req.body.data;
    if (!dataString) {
      throw new Error('data 필드가 없습니다');
    }
    const parsed = JSON.parse(dataString);
    
    if (!parsed.postingType) {
      parsed.postingType = '사례형';
      console.log('⚠️ 타입 없음 → 기본값 "사례형" 설정');
    }
    
    console.log('📊 파싱된 데이터:');
    console.log('   - postingType:', parsed.postingType);
    console.log('   - keyword:', parsed.keyword);
    console.log('   - complexName:', parsed.complexName);
    console.log('   - spaceData:', parsed.spaceData ? `${parsed.spaceData.length}개` : '없음');
    
    return parsed;
  } catch (error) {
    console.error('❌ JSON 파싱 에러:', error.message);
    throw new Error('입력 데이터 파싱 실패: ' + error.message);
  }
}

function processImages(files) {
  if (!files || files.length === 0) {
    return [];
  }

  return files.map(file => {
    const base64Data = file.buffer.toString('base64');
    
    // ⭐ 한글 파일명 인코딩 수정
    let fileName = file.originalname;
    try {
      // Buffer를 사용해서 UTF-8로 제대로 디코딩
      fileName = Buffer.from(file.originalname, 'latin1').toString('utf8');
    } catch (e) {
      console.log('⚠️ 파일명 인코딩 변환 실패, 원본 사용:', file.originalname);
    }
    
    return {
      name: fileName,
      data: base64Data,
      mimeType: file.mimetype
    };
  });
}

function createTextPrompt(data, images) {
  const { 
    keyword, 
    postingType,
    complexName, 
    spaceData,
    additionalWork,
    constructionReason,
    customerReview,
    specialNote
  } = data;

  let prompt = `${CORE_GUIDELINES}\n\n`;
  
  prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  prompt += `📋 사용자 입력 정보\n`;
  prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  
  prompt += `메인 키워드: ${keyword}\n`;
  prompt += `포스팅 타입: ${postingType}\n`;
  
  if (complexName) {
    prompt += `단지명: ${complexName}\n`;
  }
  
  // ⭐ 파일명 목록 추가!
  if (images && images.length > 0) {
    prompt += `\n[업로드된 사진 파일명]\n`;
    images.forEach((img, idx) => {
      prompt += `${idx + 1}. ${img.name}\n`;
    });
  }
  
  if (spaceData && spaceData.length > 0) {
    prompt += `\n[공간별 데이터]\n`;
    spaceData.forEach((space, idx) => {
      prompt += `\n${idx + 1}. ${space.space || space.spaceName}\n`;
      prompt += `   - 시공 유형: ${space.constructionType || space.workType}\n`;
      
      if (space.fixture) {
        prompt += `   - 등기구: ${space.fixture}\n`;
      }
      if (space.oldProduct) {
        prompt += `   - 기존 제품: ${space.oldProduct}\n`;
      }
      if (space.newProduct) {
        prompt += `   - 신규 제품: ${space.newProduct}\n`;
      }
      
      prompt += `   - 기존 소비전력: ${space.oldPower}W\n`;
      prompt += `   - 교체 후 소비전력: ${space.newPower}W\n`;
      prompt += `   - 절감: ${space.oldPower - space.newPower}W\n`;
      
      if (space.oldLux) {
        prompt += `   - 설치 전 조도: ${space.oldLux} lux\n`;
      }
      if (space.newLux) {
        prompt += `   - 설치 후 조도: ${space.newLux} lux\n`;
      }
      if (space.colorTemp) {
        prompt += `   - 색온도: ${space.colorTemp}\n`;
      }
    });
  }
  
  if (additionalWork) {
    prompt += `\n[추가 작업 정보]\n`;
    if (typeof additionalWork === 'object') {
      Object.entries(additionalWork).forEach(([key, value]) => {
        prompt += `- ${key}: ${value}\n`;
      });
    } else {
      prompt += `${additionalWork}\n`;
    }
  }
  
  if (constructionReason) {
    prompt += `\n[시공 사유]\n${constructionReason}\n`;
  }
  
  if (customerReview) {
    prompt += `\n[고객 후기]\n${customerReview}\n`;
  }
  
  if (specialNote) {
    prompt += `\n[특이사항]\n${specialNote}\n`;
  }
  
  prompt += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  prompt += `✍️ 작성 지시\n`;
  prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
  
  prompt += `위 핵심 규칙과 사용자 입력 정보를 바탕으로 네이버 블로그 포스팅을 작성하세요.\n\n`;
  
  prompt += `⚠️ 절대 규칙 체크리스트를 하나씩 확인하며 작성:\n`;
  prompt += `□ 제목에 메인키워드 1회 (맨 앞)\n`;
  prompt += `□ 키워드 총 5~6회 배치\n`;
  prompt += `□ 후킹 질문 3개 (모두 ?로 끝)\n`;
  prompt += `□ 회사 레퍼런스 2문단\n`;
  prompt += `□ 디밍 기능 표현 금지\n`;
  prompt += `□ LED 수명 2곳 배치\n`;
  prompt += `□ LED 수명 금지표현 없음\n`;
  prompt += `□ 고정 이미지 4종 배치\n`;
  prompt += `□ 사례형은 H3 구조 (전→중→후)\n`;
  prompt += `□ 소비전력 표 작성\n`;
  prompt += `□ CTA 포함\n\n`;
  
  prompt += `⭐⭐⭐ 사진 배치 규칙 (매우 중요!):\n`;
  prompt += `사진이 첨부된 경우, 각 사진을 설명하기 전에 반드시 [이미지: 파일명.jpg] 형태로 표시하세요.\n`;
  prompt += `위의 [업로드된 사진 파일명] 목록에 있는 실제 파일명을 정확히 그대로 사용하세요.\n`;
  prompt += `파일명을 임의로 변경하거나 추측하지 마세요. 목록에 있는 그대로 사용하세요.\n\n`;
  
  if (specialNote) {
    prompt += `⭐⭐⭐ 특이사항 반영 규칙 (매우 중요!):\n`;
    prompt += `[특이사항]에 입력된 내용은 반드시 포스팅에 자연스럽게 녹여내세요.\n`;
    prompt += `- 고객의 추가 발언이나 후기가 있다면 "설치 후" 섹션이나 마무리 부분에 인용 형태로 포함하세요.\n`;
    prompt += `- 특수 시공 조건이나 요청사항이 있다면 해당 공간의 "작업 중" 또는 "설치 후" 섹션에서 설명하세요.\n`;
    prompt += `- 추가 시공 내용(예: 주방등 추가 시공)이 언급되었다면 마무리 부분에서 자연스럽게 언급하세요.\n`;
    prompt += `특이사항 내용을 그대로 복사하지 말고, 포스팅 톤에 맞게 자연스럽게 재작성하여 반영하세요.\n\n`;
  }
  
  prompt += `⭐⭐⭐ 출력 형식:\n`;
  prompt += `마크다운 형식으로 작성하세요.\n`;
  prompt += `HTML은 생성하지 마세요. 오직 마크다운만 출력하세요.\n\n`;
  
  prompt += `지금 바로 작성을 시작하세요!`;
  
  return prompt;
}

function createContentArray(textPrompt, images) {
  const contentArray = [];
  
  contentArray.push({
    type: "text",
    text: textPrompt
  });
  
  if (images && images.length > 0) {
    console.log(`\n🖼️ 이미지를 Claude에 전송합니다: ${images.length}장`);
    
    images.forEach((img, idx) => {
      contentArray.push({
        type: "image",
        source: {
          type: "base64",
          media_type: img.mimeType,
          data: img.data
        }
      });
      console.log(`   ${idx + 1}. ${img.name} (${img.mimeType})`);
    });
  } else {
    console.log(`\n📝 이미지 없이 텍스트만 전송합니다.`);
  }
  
  return contentArray;
}

/**
 * ⭐ Claude 응답 파싱 (마크다운만)
 */
function parseResponse(content) {
  return {
    markdown: content.trim()
  };
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🛣️ API 라우트
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok',
    message: '서버 정상 작동 중',
    guidelines: '핵심 규칙 10KB',
    version: 'v4.0 (Claude 대화 기능)',
    features: [
      '⚡ 마크다운만 생성 (50%+ 속도 향상)',
      'HTML은 다운로드 시 즉시 변환',
      '후킹 질문 형식 수정 (## only)',
      '이미지 Claude 전송 ✅',
      '한글 파일명 지원 ✅',
      '특이사항 입력란 추가 ✅',
      '특이사항 활용 지침 강화 ✅',
      'Claude 대화로 포스팅 수정 ✅',
      'API 비용 50% 절감 ✅'
    ]
  });
});

app.post('/api/generate', upload.array('images', 20), async (req, res) => {
  try {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📨 포스팅 생성 요청');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    const data = parseInputData(req);
    console.log('✅ 데이터 파싱 완료');
    console.log(`   - 키워드: ${data.keyword}`);
    console.log(`   - 타입: ${data.postingType}`);
    console.log(`   - 단지명: ${data.complexName || '없음'}`);
    console.log(`   - 공간 수: ${data.spaceData ? data.spaceData.length : 0}개`);
    
    console.log(`\n📎 업로드된 파일: ${req.files ? req.files.length : 0}개`);
    if (req.files && req.files.length > 0) {
      req.files.forEach((file, idx) => {
        console.log(`   ${idx + 1}. ${file.originalname} (${Math.round(file.size / 1024)}KB)`);
      });
    }
    const images = processImages(req.files);
    console.log(`✅ 이미지 처리 완료: ${images.length}개`);
    
    console.log(`\n📝 프롬프트에 포함될 파일명 목록:`);
    if (images.length > 0) {
      images.forEach((img, idx) => {
        console.log(`   ${idx + 1}. ${img.name}`);
      });
    } else {
      console.log('   (파일명 없음)');
    }
    
    const textPrompt = createTextPrompt(data, images);
    console.log(`✅ 텍스트 프롬프트 생성 완료: ${Math.round(textPrompt.length / 1024)}KB`);
    
    const contentArray = createContentArray(textPrompt, images);
    console.log(`✅ Claude API 요청 content 생성 완료: ${contentArray.length}개 요소`);
    
    console.log('\n🤖 Claude API 호출 시작 (마크다운만 생성)...\n');
    
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,  // ⭐ 마크다운만 생성하므로 토큰 절반
      messages: [
        {
          role: 'user',
          content: contentArray
        }
      ]
    });
    
    const fullContent = message.content[0].text;
    const { markdown } = parseResponse(fullContent);
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ 포스팅 생성 완료');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`   - 마크다운: ${markdown.length}자`);
    console.log(`   - 키워드 횟수: ${(markdown.match(new RegExp(data.keyword, 'g')) || []).length}회`);
    console.log(`   - 이미지 전송: ${images.length}장`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    res.json({
      success: true,
      content: markdown,  // ⭐ 단일 필드로 전송
      stats: {
        length: markdown.length,
        keywordCount: (markdown.match(new RegExp(data.keyword, 'g')) || []).length,
        imageCount: images.length
      }
    });
    
  } catch (error) {
    console.error('\n❌ 에러 발생:', error.message);
    console.error(error.stack);
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💬 포스팅 수정 API (Claude 대화)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.post('/api/revise', async (req, res) => {
  try {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('💬 포스팅 수정 요청');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    const { currentContent, revisionRequest, chatHistory, originalData } = req.body;
    
    console.log(`📝 현재 포스팅 길이: ${currentContent.length}자`);
    console.log(`💬 수정 요청: ${revisionRequest}`);
    console.log(`📊 대화 히스토리: ${chatHistory ? chatHistory.length : 0}개`);
    
    // 수정 요청 프롬프트 생성
    let prompt = `당신은 네이버 블로그 포스팅 수정 전문가입니다.\n\n`;
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `📋 현재 포스팅\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    prompt += `${currentContent}\n\n`;
    
    if (originalData) {
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `📊 원본 데이터 (참고용)\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      prompt += `키워드: ${originalData.keyword}\n`;
      prompt += `단지명: ${originalData.complexName}\n`;
      if (originalData.specialNote) {
        prompt += `특이사항: ${originalData.specialNote}\n`;
      }
      prompt += `\n`;
    }
    
    if (chatHistory && chatHistory.length > 0) {
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `💬 이전 대화 내역\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      chatHistory.forEach((chat, idx) => {
        if (chat.role === 'user') {
          prompt += `사용자: ${chat.content}\n`;
        } else if (chat.role === 'assistant') {
          prompt += `Claude: ${chat.content}\n`;
        }
      });
      prompt += `\n`;
    }
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `✏️ 수정 요청\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    prompt += `${revisionRequest}\n\n`;
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `📝 응답 형식\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    prompt += `다음 형식으로 응답해주세요:\n\n`;
    prompt += `<설명>\n`;
    prompt += `수정 내용에 대한 간단한 설명 (2-3문장)\n`;
    prompt += `</설명>\n\n`;
    prompt += `<수정된포스팅>\n`;
    prompt += `전체 포스팅 마크다운 (완전한 형태로)\n`;
    prompt += `</수정된포스팅>\n\n`;
    
    prompt += `⚠️ 주의사항:\n`;
    prompt += `- <설명> 태그 안에는 수정 내용 설명만 작성\n`;
    prompt += `- <수정된포스팅> 태그 안에는 완전한 마크다운 포스팅 전체를 작성\n`;
    prompt += `- 요청된 부분만 수정하고 나머지는 그대로 유지\n`;
    prompt += `- 마크다운 형식 유지 (## 제목, ### 소제목 등)\n`;
    prompt += `- 이미지 태그 [이미지: 파일명.jpg] 형식 유지\n`;
    
    console.log(`\n🤖 Claude API 호출 중...\n`);
    
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });
    
    const fullResponse = message.content[0].text;
    
    // 응답 파싱
    const explanationMatch = fullResponse.match(/<설명>([\s\S]*?)<\/설명>/);
    const revisedMatch = fullResponse.match(/<수정된포스팅>([\s\S]*?)<\/수정된포스팅>/);
    
    const explanation = explanationMatch ? explanationMatch[1].trim() : '포스팅을 수정했습니다.';
    const revisedContent = revisedMatch ? revisedMatch[1].trim() : fullResponse;
    
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ 포스팅 수정 완료');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`   - 설명 길이: ${explanation.length}자`);
    console.log(`   - 수정 포스팅 길이: ${revisedContent.length}자`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    res.json({
      success: true,
      explanation,
      revisedContent
    });
    
  } catch (error) {
    console.error('\n❌ 에러 발생:', error.message);
    console.error(error.stack);
    
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⚡ 포스팅 수정 API (스트리밍 버전 - 빠른 응답!)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.post('/api/revise-stream', async (req, res) => {
  try {
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('⚡ 포스팅 수정 요청 (스트리밍)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    const { currentContent, revisionRequest, chatHistory, originalData } = req.body;
    
    // SSE 헤더 설정
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    // 프롬프트 생성 (동일)
    let prompt = `당신은 네이버 블로그 포스팅 수정 전문가입니다.\n\n`;
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `📋 현재 포스팅\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    prompt += `${currentContent}\n\n`;
    
    if (originalData) {
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `📊 원본 데이터 (참고용)\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      prompt += `키워드: ${originalData.keyword}\n`;
      prompt += `단지명: ${originalData.complexName}\n`;
      if (originalData.specialNote) {
        prompt += `특이사항: ${originalData.specialNote}\n`;
      }
      prompt += `\n`;
    }
    
    if (chatHistory && chatHistory.length > 0) {
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      prompt += `💬 이전 대화 내역\n`;
      prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
      chatHistory.slice(-3).forEach((chat) => {  // 최근 3개만
        if (chat.role === 'user') {
          prompt += `사용자: ${chat.content}\n`;
        }
      });
      prompt += `\n`;
    }
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `✏️ 수정 요청\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    prompt += `${revisionRequest}\n\n`;
    
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    prompt += `📝 응답 형식\n`;
    prompt += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    prompt += `다음 형식으로 응답해주세요:\n\n`;
    prompt += `<설명>\n`;
    prompt += `수정 내용에 대한 간단한 설명 (2-3문장)\n`;
    prompt += `</설명>\n\n`;
    prompt += `<수정된포스팅>\n`;
    prompt += `전체 포스팅 마크다운 (완전한 형태로)\n`;
    prompt += `</수정된포스팅>\n\n`;
    
    console.log(`\n⚡ Claude API 스트리밍 호출 중...\n`);
    
    // ⭐ 스트리밍 방식으로 호출
    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });
    
    let fullResponse = '';
    
    // 스트리밍 데이터 수신 및 전송
    stream.on('text', (text) => {
      fullResponse += text;
      // SSE 형식으로 클라이언트에 전송
      res.write(`data: ${JSON.stringify({ type: 'chunk', text })}\n\n`);
    });
    
    stream.on('end', () => {
      // 응답 파싱
      const explanationMatch = fullResponse.match(/<설명>([\s\S]*?)<\/설명>/);
      const revisedMatch = fullResponse.match(/<수정된포스팅>([\s\S]*?)<\/수정된포스팅>/);
      
      const explanation = explanationMatch ? explanationMatch[1].trim() : '포스팅을 수정했습니다.';
      const revisedContent = revisedMatch ? revisedMatch[1].trim() : fullResponse;
      
      // 완료 메시지 전송
      res.write(`data: ${JSON.stringify({ 
        type: 'done', 
        explanation, 
        revisedContent 
      })}\n\n`);
      
      res.end();
      
      console.log('\n✅ 스트리밍 완료');
      console.log(`   - 전체 길이: ${fullResponse.length}자\n`);
    });
    
    stream.on('error', (error) => {
      console.error('스트리밍 에러:', error);
      res.write(`data: ${JSON.stringify({ type: 'error', message: error.message })}\n\n`);
      res.end();
    });
    
  } catch (error) {
    console.error('\n❌ 에러 발생:', error.message);
    res.write(`data: ${JSON.stringify({ type: 'error', message: error.message })}\n\n`);
    res.end();
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🚀 서버 시작
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

app.listen(PORT, () => {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🚀 서버 시작! v4.1 (스트리밍 + 레이아웃 개선)');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📍 http://localhost:${PORT}`);
  console.log('📘 핵심 규칙 기반 (10KB)');
  console.log('🎯 예상 품질: 75-85%');
  console.log('⚡ 속도 향상: 50%+ (마크다운만 생성)');
  console.log('🖼️ 이미지 Claude 전송: ✅');
  console.log('📍 후킹 질문 형식: ## only (> 금지)');
  console.log('🇰🇷 한글 파일명 지원: ✅');
  console.log('✨ 특이사항 입력란: ✅');
  console.log('🎯 특이사항 활용 지침: ✅');
  console.log('💬 Claude 대화로 수정: ✅');
  console.log('⚡ 스트리밍 실시간 응답: ✅');
  console.log('📐 미리보기+채팅 동시 표시: ✅');
  console.log('💰 API 비용: 50% 절감');
  console.log('📋 HTML 변환: 프론트엔드에서 즉시');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});