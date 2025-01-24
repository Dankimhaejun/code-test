# 코드 테스트 - 동적 파일 실행

이 레포지토리는 `pnpm`과 `ts-node-dev`를 사용하여 TypeScript 파일을 동적으로 실행하는 방법을 보여줍니다. 아래는 설정, 사용법, 테스트 방법에 대한 설명입니다.

---

## 주요 기능
- 실행 시 원하는 TypeScript 파일을 동적으로 지정 가능
- 파일을 지정하지 않을 경우 기본 파일 실행
- 간단하고 효율적인 개발 환경 설정

---

## 준비물
다음이 설치되어 있어야 합니다:
- [Node.js](https://nodejs.org/) (v20 이상 권장)
- [pnpm](https://pnpm.io/) (v8 이상)

---

## 설치 방법
1. 레포지토리 클론:
   ```bash
   git clone <레포지토리-URL>
   cd code-test
   ```

2. 의존성 설치:
   ```bash
   pnpm install
   ```

---

## 사용 방법

### 기본 파일 실행
기본 파일(`src/address-test.ts`)을 실행하려면:
```bash
pnpm run dev
```

### 동적으로 파일 지정하여 실행
다른 파일을 실행하려면 `--file` 옵션을 사용하세요:
```bash
pnpm run dev --file=다른파일명.ts
```

### 예시
1. `src/address-test.ts`(기본 파일) 실행:
   ```bash
   pnpm run dev
   ```

2. `src/example-test.ts` 실행:
   ```bash
   pnpm run dev --file=example-test.ts
   ```

**참고**: 지정한 파일이 반드시 `src/` 디렉토리에 존재해야 합니다.

---

## 스크립트 설명
- **build**: TypeScript 파일을 JavaScript로 컴파일합니다.
  ```bash
  pnpm run build
  ```

- **dev**: 동적으로 지정된 TypeScript 파일을 실행합니다 (기본값: `src/address-test.ts`).

- **lint**: 프로젝트 전반의 린트 문제를 자동으로 수정합니다.
  ```bash
  pnpm run lint
  ```

---

## 작동 원리
`package.json`의 `dev` 스크립트는 다음과 같이 설정되어 있습니다:
```json
"dev": "ts-node-dev --respawn -- src/${npm_config_file:-address-test.ts}"
```

### 주요 포인트
1. **동적 파일 지정**: `npm_config_file` 환경 변수를 사용하여 파일명을 동적으로 지정합니다.
2. **기본 파일**: `npm_config_file`이 없으면 기본값으로 `address-test.ts`를 사용합니다.
3. **파일 경로**: `src/`를 경로에 포함시켜 파일을 정확히 지정합니다.

---

## 파일 구조
```
code-test/
├── src/
│   ├── address-test.ts
│   ├── example-test.ts
│   └── ...
├── package.json
├── tsconfig.json
├── cleanedAddresses.json (출력 파일)
└── ...
```

- **`src/`**: TypeScript 파일들이 위치하는 디렉토리
- **`cleanedAddresses.json`**: 실행 결과로 생성되는 출력 파일

---

## 문제 해결
1. **파일을 찾을 수 없음**:
   지정한 파일이 `src/` 디렉토리에 존재하는지 확인하세요.

2. **예상치 못한 에러**:
   `pnpm install` 명령어를 실행하여 의존성이 모두 설치되었는지 확인하세요.

3. **스크립트 실행 불가**:
   파일 이름을 정확히 입력하고 `--file` 옵션을 사용했는지 확인하세요.

---

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.

