# 📎 HTML 스타일 가이드

**버전:** 1.1  
**최종 업데이트:** 2025-10-25  
**용도:** HTML 출력 시 참조  

---

## 📂 이 문서의 위치

```
📘 메인 지침서 v6.9 (핵심 규칙)
   ├─ 📗 후킹_질문_마스터_가이드.md
   ├─ 📘 체크리스트_빠른참조.md
   ├─ 📕 HTML_스타일_가이드.md ← 📍 현재 문서
   └─ 📙 유사문서_방지_표현_라이브러리.md
```

**🔗 연계 문서:**
- **메인:** 네이버_블로그_콘텐츠_작성_지침서_v6.9.md (섹션 7)
- **참조:** 체크리스트_빠른참조.md (HTML 작성 시 필수 체크)

**📌 이 문서를 언제 보나요?**
- 사용자가 "HTML로 작성해줘" 요청했을 때만!
- 기본은 마크다운, HTML은 명시적 요청 시에만

**⚠️ 중요:**
이 문서는 HTML 출력 시에만 사용합니다. 
별도 요청 없으면 메인 지침서의 마크다운 규칙을 따르세요.

---

## 📑 목차

```
1. HTML 출력 시기
2. 기본 원칙
3. 제목 스타일 (H1/H2/H3)
4. 본문 텍스트 스타일
5. BLOCKQUOTE 스타일
6. 표(TABLE) 스타일
7. BR 태그 사용 규칙
8. 이미지 표기법 ⭐ 매우 중요!
9. 완성 예시
10. 체크리스트
```

---

## 1. HTML 출력 시기

### ⚠️ 필수 확인

**HTML 작성 조건:**
```
사용자가 명시적으로 요청했는가?
- "HTML로 작성해줘"
- "HTML 형식으로"
- "HTML 출력"

→ Yes: 이 가이드 사용
→ No: 마크다운으로 작성 (이 가이드 사용 금지!)
```

**기본값: 마크다운**
- 별도 요청 없으면 마크다운
- HTML은 명시적 요청 시에만

---

## 2. 기본 원칙

### 📌 필수 규칙

- 한 문장마다 `<p>` 태그로 분리
- **P 태그와 BLOCKQUOTE의 margin을 0으로 설정** (BR 태그로 간격 조절)
- 폰트: **Noto Sans KR**
- 이모지 사용 금지
- **글씨 크기 단위: px로 통일**

---

## 3. 제목 스타일

### H1 - 메인 제목

```html
<h1 style="font-size: 35px; font-weight: 700; color: #4a148c; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; border-bottom: 3px solid #7b1fa2; padding-bottom: 0.3em; font-family: 'Noto Sans KR', sans-serif;">
블로그 메인 제목
</h1>
```

**특징:**
- 글씨 크기: 35px
- 하단 보라색 라인 (3px solid)

---

### H2 - 주요 섹션 제목

```html
<h2 style="font-size: 34px; font-weight: 700; color: #ffffff; background-color: #6a1b9a; border: 2px solid #6a1b9a; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; padding: 0.6em 0.8em; font-family: 'Noto Sans KR', sans-serif;">
시공 개요 및 소비전력 비교
</h2>
```

**특징:**
- 글씨 크기: 34px
- 글자색: 흰색 (#ffffff)
- 배경색: 보라색 (#6a1b9a)

---

### H3 - 설치 전/작업 중/설치 후

```html
<h3 style="font-size: 24px; font-weight: 700; color: #4a148c; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; border: 1px solid #f3e5f5; border-left: 5px solid #9c27b0; padding: 0.6em 0.8em; font-family: 'Noto Sans KR', sans-serif;">
설치 전
</h3>
```

**특징:**
- 글씨 크기: 24px
- 좌측 강조 라인: 굵은 보라색 5px

---

## 4. 본문 텍스트 스타일

```html
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
일반 본문 텍스트
</p>
```

**핵심:**
- margin-bottom: 0 (BR 태그로 간격 조절)
- 폰트 크기: 19px

---

## 5. BLOCKQUOTE 스타일

### 후킹 질문용

```html
<blockquote style="background: #f3e5f5; border-left: 5px solid #4a148c; padding: 20px; font-size: 24px; line-height: 1.8; text-align: center; font-weight: 700; margin: 0; font-style: italic; color: #4a148c; font-family: 'Noto Sans KR', sans-serif;">
10년 된 LED조명, 밝기가 약해지고 색이 변했나요?
</blockquote>
```

**핵심:**
- margin: 0 (BR 태그로 간격 조절)
- 폰트 크기: 24px
- 배경: 연보라색

---

## 6. 표(TABLE) 스타일

```html
<table style="width: 100%; border-collapse: collapse; margin: 1.5em 0; font-family: 'Noto Sans KR', sans-serif;">
  <thead>
    <tr>
      <th style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; background-color: #9c27b0; color: white; font-weight: 700; font-size: 18px;">공간</th>
      <th style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; background-color: #9c27b0; color: white; font-weight: 700; font-size: 18px;">기존</th>
      <th style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; background-color: #9c27b0; color: white; font-weight: 700; font-size: 18px;">교체 후</th>
      <th style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; background-color: #9c27b0; color: white; font-weight: 700; font-size: 18px;">절감</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; font-size: 19px;">거실</td>
      <td style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; font-size: 19px;">432W</td>
      <td style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; font-size: 19px;">216W</td>
      <td style="border: 1px solid #e1bee7; padding: 0.5em; text-align: center; font-size: 19px;">216W</td>
    </tr>
  </tbody>
</table>
```

---

## 7. BR 태그 사용 규칙

### 📊 BR 규칙 완전 통합표

| 위치 | BR 개수 | 비고 |
|------|---------|------|
| **기본 문장** | | |
| 일반 문장 사이 | 1개 | |
| 후킹 질문 사이 | 0개 | 블록으로 붙여서 |
| 후킹 질문 → 본문 | 1개 | |
| **제목 관련** | | |
| H1 → 후킹 질문 | 1개 | |
| 문장 → H2 | 2개 | 큰 섹션 구분 |
| H2 → 본문 | 1개 | |
| H2 → H3 | 0개 | 연결 구조 |
| 문장 → H3 | 1개 | |
| H3 → 본문 | 1개 | |
| **표(TABLE)** | | |
| 표 → 설명 문장 | 0개 | 표 직접 설명 |
| 표 → 무관 문장 | 1개 | 새 주제 |
| **고정 이미지** | | |
| 회사 레퍼런스 → 업체소개 GIF | 1개 | |
| 업체소개 GIF → 다음 문단 | 1개 | |
| 마지막 문단 → 썸네일 | 1개 | |
| 썸네일 → 첫 H2 | 2개 | 큰 구분 |
| H2 → 조도비교 GIF | 0개 | 붙여서 |
| 조도비교 GIF → H3 | 1개 | |
| 첫 공간 마지막 → 문의배너 | 1개 | 첫 공간만 |
| 문의배너 → 다음 H2 | 2개 | 큰 구분 |
| **시공 사진** | | |
| H3 → 시공사진 | 1개 | |
| 시공사진 → 문단 | 1개 | |
| 문단 → 시공사진 | 1개 | |

---

## 8. 이미지 표기법

### 🚨 절대 금지: HTML 주석 사용 (매우 중요!)

```
┌────────────────────────────────────────────┐
│  ⚠️  HTML 주석은 화면에 표시되지 않습니다!  │
└────────────────────────────────────────────┘
```

**왜 안 되나요?**
HTML 주석 `<!-- -->` 은 브라우저에서 렌더링되지 않습니다.
→ 사용자가 이미지 위치를 찾을 수 없습니다.
→ 이미지를 교체할 수 없습니다.

**❌ 절대 금지 사례:**
```html
<!-- [이미지: 거실_설치전_01.jpg] -->
<!-- [GIF: 업체소개.gif] -->
<!-- [썸네일: 대표이미지.jpg] -->
<!-- [배너: 문의배너.jpg] -->
```

**이렇게 하면:**
- 브라우저: 아무것도 표시 안 함
- 사용자: 이미지 위치를 찾을 수 없음
- 결과: 이미지 없는 빈 포스팅

---

### ⚠️ HTML 주석 절대 사용 금지!

---

### 📌 이미지 표기법 개요

**HTML에서 이미지 표기 방법:**
1. **방법 1:** 보라색 텍스트로 표기 (권장)
2. **방법 2:** 실제 img 태그 사용 (경로 알 때만)

**❌ 잘못된 방법:**
```html
<!-- [이미지: 파일명.jpg] -->
```
→ HTML 주석은 화면에 안 보임!

---

### ✅ 올바른 방법 1: 텍스트로 표기

```html
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[이미지: 송도 그린워크1차 거실등 설치전 1.jpg]
</p>
<br>
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
1번 사진 설명
</p>
```

**특징:**
- 보라색 텍스트로 명확히 표시
- 사용자가 쉽게 찾아서 이미지로 교체 가능

---

### ✅ 올바른 방법 2: 실제 img 태그

```html
<img src="/uploads/파일명.jpg" alt="설명" style="width: 100%; max-width: 800px; margin: 1em auto; display: block;">
<br>
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
1번 사진 설명
</p>
```

**사용 조건:**
- 이미지 경로를 정확히 알 때만
- 대부분의 경우 방법 1 권장

---

### 📋 고정 이미지 4종 표기

```html
<!-- 업체소개 GIF -->
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[GIF: 업체소개.gif]
</p>

<!-- 썸네일 -->
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[썸네일: 대표이미지.jpg]
</p>

<!-- 조도비교 GIF -->
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[GIF: 거실_조도비교.gif]
</p>

<!-- 문의 배너 -->
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[배너: 문의배너.jpg]
</p>
```

---

## 9. 완성 예시

### 사례형 포스팅 HTML 구조

```html
<h1 style="font-size: 35px; font-weight: 700; color: #4a148c; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; border-bottom: 3px solid #7b1fa2; padding-bottom: 0.3em; font-family: 'Noto Sans KR', sans-serif;">
LED조명 교체 송도 힐스테이트 거실등 리폼 사례
</h1>
<br>
<blockquote style="background: #f3e5f5; border-left: 5px solid #4a148c; padding: 20px; font-size: 24px; line-height: 1.8; text-align: center; font-weight: 700; margin: 0; font-style: italic; color: #4a148c; font-family: 'Noto Sans KR', sans-serif;">
10년 된 LED조명, 밝기가 약해지고 색이 변했나요?
</blockquote>
<blockquote style="background: #f3e5f5; border-left: 5px solid #4a148c; padding: 20px; font-size: 24px; line-height: 1.8; text-align: center; font-weight: 700; margin: 0; font-style: italic; color: #4a148c; font-family: 'Noto Sans KR', sans-serif;">
등 전체를 교체하려니 비용이 부담되시나요?
</blockquote>
<blockquote style="background: #f3e5f5; border-left: 5px solid #4a148c; padding: 20px; font-size: 24px; line-height: 1.8; text-align: center; font-weight: 700; margin: 0; font-style: italic; color: #4a148c; font-family: 'Noto Sans KR', sans-serif;">
LED 모듈만 바꿔서 경제적으로 해결할 수 있다면 어떨까요?
</blockquote>
<br>
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
서론 첫 문단입니다.
</p>
<br>
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
회사 레퍼런스 첫 번째 문단입니다.
</p>
<br>
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[GIF: 업체소개.gif]
</p>
<br>
<p style="font-size: 19px; line-height: 1.8; margin-bottom: 0; color: #333; font-family: 'Noto Sans KR', sans-serif;">
회사 레퍼런스 두 번째 문단입니다.
</p>
<br>
<p style="text-align: center; font-weight: 700; color: #9c27b0; font-size: 17px; font-family: 'Noto Sans KR', sans-serif;">
[썸네일: 대표이미지.jpg]
</p>
<br><br>
<h2 style="font-size: 34px; font-weight: 700; color: #ffffff; background-color: #6a1b9a; border: 2px solid #6a1b9a; margin-top: 1.5em; margin-bottom: 0.8em; line-height: 1.2; padding: 0.6em 0.8em; font-family: 'Noto Sans KR', sans-serif;">
시공 개요 및 소비전력 비교
</h2>
```

---

## 10. 체크리스트

### ✅ HTML 작성 전

- [ ] 사용자가 "HTML로 작성해줘" 요청했는가?
- [ ] 이 가이드를 참조했는가?

---

### ✅ HTML 작성 중

**스타일:**
- [ ] H1 (35px, 하단 보라 라인)
- [ ] H2 (34px, 보라 배경, 흰색 글씨)
- [ ] H3 (24px, 좌측 보라 라인)
- [ ] 본문 P (19px, margin-bottom: 0)
- [ ] BLOCKQUOTE (24px, margin: 0)

**BR 태그:**
- [ ] 후킹 질문 사이 BR 없음
- [ ] 문장 사이 BR 1개
- [ ] 문장 → H2 사이 BR 2개
- [ ] H2 → H3 사이 BR 없음

**이미지:**
- [ ] HTML 주석 사용 안 함 ⭐ 매우 중요!
- [ ] 보라색 텍스트로 표기
- [ ] 고정 이미지 4종 배치

---

### ✅ HTML 작성 후

**최종 확인:**
- [ ] 이미지를 HTML 주석으로 표기하지 않았는가? ⭐ 필수!
- [ ] 모든 이미지가 보라색 텍스트로 표기되었는가?
- [ ] 폰트가 Noto Sans KR인가?
- [ ] 글씨 크기가 px 단위인가?

---

### 🚨 HTML 주석 체크 (매우 중요!)

**작성 완료 후 반드시 확인:**
```
HTML 본문에 <!-- --> 가 있나?
→ Yes: ❌ 즉시 삭제하고 <p style="...">로 변경!
→ No: ✅ 올바름
```

**검색 방법:**
```
Ctrl+F로 "<!--" 검색
→ 발견됨: 모두 텍스트 표기로 변경
→ 없음: 통과
```

---

## 📊 색상 코드 레퍼런스

| 요소 | 색상 | 코드 |
|------|------|------|
| 메인 보라 | 진한 보라 | #4a148c |
| 배경 보라 | 중간 보라 | #6a1b9a |
| 강조 보라 | 밝은 보라 | #9c27b0 |
| 연보라 배경 | 연보라 | #f3e5f5 |
| 본문 텍스트 | 어두운 회색 | #333 |
| 흰색 | 흰색 | #ffffff |

---

## 📏 글씨 크기 레퍼런스

| 요소 | 크기 |
|------|------|
| H1 | 35px |
| H2 | 34px |
| H3 | 24px |
| BLOCKQUOTE | 24px |
| 본문 P | 19px |
| 이미지 표기 | 17px |
| 표 헤더 | 18px |
| 표 본문 | 19px |

---

## 🔗 다음 단계

### **HTML 작성 완료 후:**

1. **체크리스트 확인** → 📘 체크리스트_빠른참조.md (HTML 작성 시 필수 체크)
2. **메인 지침서로 복귀** → 네이버_블로그_콘텐츠_작성_지침서_v6.9.md (섹션 12)

---

## 📞 도움이 필요하면

- **메인 규칙 확인:** 네이버_블로그_콘텐츠_작성_지침서_v6.9.md (섹션 7)
- **실전 체크:** 📘 체크리스트_빠른참조.md (HTML 작성 시 필수 체크)
- **문의:** 지침서 v6.9 관리자

---

**문서 끝**

---

**버전 이력:**
- v1.1 (2025-10-25): 문서 구조도 추가, 섹션 8 HTML 주석 경고 강화
- v1.0 (2025-10-25): 메인 지침서 v6.8에서 분리
