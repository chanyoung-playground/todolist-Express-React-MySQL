import { useNavigate } from 'react-router-dom';

export function useRedirect() {
  const navigate = useNavigate();
  const redirect = (res) => {
    if (res.status === 201) {
      alert('회원가입 성공');
      navigate('/signin');
    } else if (res.status === 200) {
      localStorage.setItem('accessToken', res.data.access_token);
      alert('로그인 성공');
      navigate('/todo');
    } else {
      alert(`${res.response.data.message}`);
    }
  };

  return redirect;
}
