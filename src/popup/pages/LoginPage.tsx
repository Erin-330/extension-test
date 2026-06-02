import { FormEvent, useState } from 'react';
import TextField from '../components/TextField';

type FormErrors = {
  email?: string;
  password?: string;
};

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!email) {
      next.email = '이메일을 입력해주세요.';
    } else if (!EMAIL_PATTERN.test(email)) {
      next.email = '올바른 이메일 형식이 아닙니다.';
    }
    if (!password) {
      next.password = '비밀번호를 입력해주세요.';
    } else if (password.length < 6) {
      next.password = '비밀번호는 6자 이상이어야 합니다.';
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitState('submitting');
    setServerMessage(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      if (remember && chrome?.storage?.local) {
        await chrome.storage.local.set({ lastEmail: email });
      }
      setSubmitState('success');
      setServerMessage('로그인되었습니다.');
    } catch {
      setSubmitState('error');
      setServerMessage('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const isSubmitting = submitState === 'submitting';

  return (
    <section className="flex min-h-[480px] flex-col justify-between bg-white p-6">
      <header className="mb-6 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-sm">
          <span className="text-lg font-bold">L</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">로그인</h1>
        <p className="mt-1 text-sm text-gray-500">
          계정에 로그인하여 서비스를 이용하세요.
        </p>
      </header>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <TextField
          id="email"
          label="이메일"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(value) => {
            setEmail(value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          error={errors.email}
          disabled={isSubmitting}
        />

        <TextField
          id="password"
          label="비밀번호"
          type="password"
          autoComplete="current-password"
          placeholder="6자 이상 입력해주세요"
          value={password}
          onChange={(value) => {
            setPassword(value);
            if (errors.password) {
              setErrors((prev) => ({ ...prev, password: undefined }));
            }
          }}
          error={errors.password}
          disabled={isSubmitting}
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-brand-500 focus:ring-brand-500"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              disabled={isSubmitting}
            />
            이메일 기억하기
          </label>
          <button
            type="button"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            비밀번호 찾기
          </button>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? '로그인 중...' : '로그인'}
        </button>

        {serverMessage && (
          <p
            role="status"
            className={`text-center text-sm ${
              submitState === 'success' ? 'text-emerald-600' : 'text-red-600'
            }`}
          >
            {serverMessage}
          </p>
        )}
      </form>

      <footer className="mt-6 text-center text-sm text-gray-500">
        계정이 없으신가요?{' '}
        <button
          type="button"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          회원가입
        </button>
      </footer>
    </section>
  );
}
