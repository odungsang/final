# 201930421 이상현


## 깃허브 커밋 규칙

효율적인 협업과 프로젝트 관리를 위해 다음과 같은 커밋 규칙을 따르기로 합니다.

### 1. 커밋 메시지 구조

커밋 메시지는 다음 구조를 따르기:



<type>(<scope>): <subject>

<body>

<footer>



### 2. Type

커밋의 유형을 나타내며, 다음 중 하나를 선택하기:

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 형식 변경 (코드 로직에 영향을 주지 않는 변경)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가 또는 수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경
- `perf`: 성능 개선
- `ci`: CI 설정 파일 및 스크립트 변경
- `revert`: 이전 커밋으로 되돌리기

### 3. Scope (선택사항)

변경이 영향을 미치는 범위를 나타내기. 예: (userAuth), (navbar), (api)

### 4. Subject

- 변경 사항을 간결하게 설명하기
- 명령문 형태로 작성하기 (예: "변경", "추가", "수정" 등으로 시작)
- 첫 글자는 대문자로 시작하지 않기
- 끝에 마침표(.) 사용하지 않기

### 5. Body (선택사항)

- 변경 이유와 변경 내용을 자세히 설명하기
- 여러 줄로 작성 가능

### 6. Footer (선택사항)

- Breaking Changes: 호환성을 깨뜨리는 변경사항 명시
- Closed Issues: 해결된 이슈 번호 명시 (예: Closes #123, #456)

### 7. 커밋 예시



feat(auth): 소셜 로그인 기능 추가

- Google과 Kakao 소셜 로그인 구현
- 유저 프로필 정보 연동 및 DB 저장 로직 추가

성능 최적화를 위해 토큰 갱신 로직 개선

Closes #123, #456



### 8. 추가 규칙

1. 논리적 단위로 커밋 나누기: 하나의 커밋에는 하나의 논리적 변경사항만 포함하기
2. 자주 커밋하기: 작업 내용을 잃지 않고 변경사항을 쉽게 추적할 수 있도록 작은 단위로 자주 커밋하기
3. 커밋 전 코드 리뷰하기: `git diff` 명령어를 사용하여 변경사항을 다시 한 번 확인하기
4. 테스트 통과 확인: 커밋하기 전 모든 테스트가 통과하는지 확인하기
5. 브랜치 전략 따르기: 팀에서 정한 브랜치 전략(예: Git Flow, GitHub Flow)을 준수하기

### 9. 권장 사항

- 영어로 커밋 메시지 작성하기: 국제적인 협업과 오픈소스 기여를 고려하여 가능한 영어로 작성하기
- 현재형으로 작성하기: "Added feature"가 아닌 "Add feature"로 작성하기
- 필요시 이슈 번호 참조하기: 관련 이슈가 있다면 커밋 메시지에 이슈 번호를 포함하기 (예: #123)

이 규칙을 따르면 프로젝트의 히스토리를 명확하게 관리하고, 효율적인 코드 리뷰와 버전 관리가 가능해집니다.

```markdown
## 깃허브 커밋 규칙

### 1. Type별 실제 커밋 예시

#### `feat` (새로운 기능)
```
feat(login): 소셜 로그인 기능 추가
feat(user): 회원가입 폼 유효성 검사 구현
```

#### `fix` (버그 수정)
```
fix(api): 회원 인증 토큰 만료 버그 해결
fix(payment): 결제 실패 시 예외 처리 로직 수정
```

#### `docs` (문서 수정)
```
docs(readme): 프로젝트 설치 가이드 업데이트
docs(api): 엔드포인트 명세서 수정
```

#### `refactor` (코드 리팩토링)
```
refactor(auth): 로그인 로직 모듈화
refactor(component): 불필요한 중복 코드 제거
```

#### `test` (테스트 코드)
```
test(user): 회원가입 단위 테스트 추가
test(api): 로그인 API 통합 테스트 구현
```

### 2. 커밋 메시지 작성 팁

✅ 잘된 예시:
```
feat(user): 소셜 로그인 기능 구현

- Google, Kakao 소셜 로그인 추가
- 토큰 발급 및 저장 로직 개발

Closes #123
```

❌ 나쁜 예시:
```
수정함
버그 고침
```

### 3. 추가 권장사항

- 50자 이내로 간결하게 작성
- 현재형 동사 사용 (Add, Fix, Update)
- 구체적이고 명확한 설명 제공
- 관련 이슈 번호 포함

### 4. 커밋 전 체크리스트

1. 코드 포맷팅 확인
2. 린트 검사 통과
3. 테스트 코드 실행
4. 불필요한 콘솔/주석 제거
```

이렇게 구체적인 예시와 함께 작성하면 팀원들이 더 쉽게 이해하고 따를 수 있습니다. 필요하다면 팀의 특성에 맞게 조정하세요.

