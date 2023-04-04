
type LinkTitle = string;
type LinkURL = string;

export type Link = [LinkTitle, LinkURL];

export type Term = {
    category: 'CS' | 'React',
    term: string, 
    description: string,
    more?: string,
    link?: Link[]
}

const terms:Term[] = [
    {
        category: 'CS',
        term: '프록시 서버(Proxy server)', 
        description: '프록시 서버는 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해 주는 컴퓨터 시스템이나 응용 프로그램을 가리킨다. 서버와 클라이언트 사이에 "중계기(중계자)"로서 "대리"로 통신을 수행하는 것을 가리켜 "프록시", 그 중계 기능을 하는 것을 프록시 서버라고 부른다.',
    },
    {
        category: 'CS',
        term: '오버라이딩과 오버로딩',
        description: '오버라이딩(Overriding) : 상위 클래스에서 정의한 메소드와 이름은 같지만 메소드 안의 실행코드를 달리하여 자식 클래스에서 재정의하여 사용할 수 있음. 오버로딩(Overloading) : 메소드의 이름은 같지만 인수를 받는 자료형과 개수를 달리 하여 여러 기능을 정의할 수 있음',
    },
    {
        category: 'React',
        term: 'JSX', 
        description: '자바스크립트 확장문법. 브라우저에서 실행되기 전에, 코드가 번들링되는 과정에서 바벨을 사용하여 일반 자바스크립트의 형태의 코드로 변환됨',
    },
    {
        category: 'CS',
        term: 'Git vs SVN', 
        description: 'SVN이 Git보다 오래되었으며 버전관리에 최적화된 간편한 기능을 제공하는 중앙 집중식 버전관리도구이다. Git은 다양한 기능이 존재하며 분산 관리식으로 복구가 편리하다',
        link: [
            ['git과 SVN 설명, 등장배경, 차이점', 'https://codedosa.com/653']
        ]
    },
    {
        category: 'CS',
        term: 'FOIT vs FOUT', 
        description: 'FOIT:Flash of Invisible Text 브라우저가 웹 글꼴을 다운로드하기 전에 텍스트가 보이지 않는 현상 FOUT:Flash of Unstyled Tex 브라우저가 웹 글꼴을 다운로드하기 전에 텍스트가 대체 글꼴로 렌더링되는 현상',
    },
    {
        category: 'CS',
        term: 'SOP와 CORS', 
        description: 'SOP:Same-origin policy, 동일 출처 정책. 자바스크립트 엔진 표준 스펙의 보안 규칙으로 하나의 출처(Origin)에서 로드된 자원(문서나 스크립트)이 호스트나 프로토콜, 포트번호가 일치하지 않는 자원과 상호작용 하지 못하도록 요청 발생을 제한하고, 동일 출처(Same Origin)에서만 접근이 가능한 정책 CORS: Cross-Origin Resource Sharing, 교차 출처 리소스 공유. 웹페이지상에서 자바스크립트를 이용하여 XHR(XMLHttpRequest)을 다른 도메인으로 발생 시킬 수 있도록 해주는 기능을 가지고 있고 XHR 기반 cross-origin HTTP 요청을 이용하여 자원을 공유해야 하는 브라우저와 서버 간의 안전한 교차 출처 요청 및 데이터 전송을 지원',
        more: 'CORS를 하기위해 프록시 서버를 둬서 해결하기도함. 클라이언트에서 직접 API서버에 요청했을때는 문제가 생기지만 서버에서 API서버에 요청했을때는 문제가 발생하지 않기때문',
        link: [
            ['링크1', 'https://happycording.tistory.com/entry/let-const-%EB%9E%80-%EC%99%9C-%EC%8D%A8%EC%95%BC%EB%A7%8C-%ED%95%98%EB%8A%94%EA%B0%80-ES6'], 
            ['링크2', 'https://github.com/Ryusoo-h/hanmadi']
        ]
    },
    {
        category: 'CS',
        term: '키워드', 
        description: '설명입니다',
        more: '추가 설명입니다',
        link: [
            ['링크1', 'https://happycording.tistory.com/entry/let-const-%EB%9E%80-%EC%99%9C-%EC%8D%A8%EC%95%BC%EB%A7%8C-%ED%95%98%EB%8A%94%EA%B0%80-ES6'], 
            ['링크2', 'https://github.com/Ryusoo-h/hanmadi']
        ]
    },
];

export default terms;