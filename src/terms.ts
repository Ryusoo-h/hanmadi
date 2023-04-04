
type LinkTitle = string;
type LinkURL = string;

export type Link = [LinkTitle, LinkURL];

export type Term = {
    category: 'CS' | 'React',
    term: string, 
    description: string,
    more?: string,
    link?: [Link, Link]
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