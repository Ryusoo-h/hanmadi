
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
        term: '웹브라우저', 
        description: '인터넷에서 웹 서버의 모든 정보를 볼 수 있도록 하고, 문서 검색을 도와주는 응용 프로그램이다.',
        more: '브라우저는 서버로부터 데이터를 전송받고, 렌더링 엔진을 사용해 이를 텍스트 및 이미지 등으로 변환한다. 수신한 파일을 기반으로 표시할 내용을 파악하는 소프트웨어인 브라우저 엔진이 있다. 정보는 하이퍼텍스트 전송 프로토콜을 사용하여 전송된다. 브라우저 마다 해석이 다르기때문에 웹사이트가 다르게 보일 수 있다. 하지만 어떤 웹브라우저를 선택하든 일관성있게 만드는것을 웹표준이라고 한다.'
    },
    {
        category: 'CS',
        term: '브라우저 엔진', 
        description: '모든 주요 웹 브라우저의 핵심 소프트웨어 구성요소로 HTML 문서와 기타자원의 웹페이지를 사용자의 장치에 상호작용적인 시각 표현으로 변환하는 역할을 함',
        more: '레이아웃과 렌더링 외에도 문서들간의 보안 정책을 강제하며 페이지 스크립트에 노출되는 문서 객체 모델(DOM) 자료구조를 구현하며, 하이퍼링크와 웹폼을 관리한다. 웹 브라우저 외에도 다른 종류의 프로그램들에 사용될 수 있다. 대부분의 브라우저가 브라우저 엔진으로는 Blink (iOS는 WebKit), 자바스크립트 엔진으로는 V8을 사용함',
        link: [
            ['점유율 통계 자료', 'https://gs.statcounter.com/'],
            ['notion정리 : 브라우저별 엔진 및 점유율', 'https://www.notion.so/ryu-soohyeon/11825774c24449c0b438645ae0301a57?pvs=4#c7cfb018fea64825a3043340072c1fdf']
        ]
    },
    {
        category: 'CS',
        term: 'HTML, XML', 
        description: 'HTML: HyperText Markup Language. ISO가 채택한, 웹에서 사용하는 표준 마크업 언어. XML: eXtensible Markup Language (확장가능한 마크업 언어). XML은 주로 다른 종류의 시스템, 특히 인터넷에 연결된 시스템끼리 데이터를 쉽게 주고 받을 수 있게 하여 HTML의 한계를 극복할 목적으로 만들어졌다.',
    },
    {
        category: 'CS',
        term: 'DOM', 
        description: 'Document Object Model. XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스이다. W3C의 표준이다. W3C의 표준화한 API들의 기반이 된다.',
        more: 'DOM 트리는 4가지 노드로 구성됨. 문서 노드 (Document Node) : 트리의 최상위 객체. DOM 트리에 접근하기 위한 시작점. 요소 노드(Element Node) : HTML 요소 (태그) 를 객체로 표현한 것. 어트리뷰트 노드(Attribute Node) : HTML 요소의 "Attribute"를 객체로 표현한 것. 텍스트 노드(Text Node) : HTML 요소의 "텍스트"를 객체로 표현한 것',
    },
    {
        category: 'CS',
        term: 'DOCTYPE', 
        description: 'HTML의 문서타입, DTD(DOCTYPE or Document type Definition). HTML문서의 반드시 최상위에 선언해야하며, 웹 브라우저가 내용을 올바르게 표시할 수 있도록 해주는것이다.',
        more: '생략 시 쿼크모드, 비표준모드로 렌더링되어 크로스 브라우징에 어려움을 겪을 수 있다. 쿼크모드란 : 오래된 웹 페이지의 하위 호환성 유지를 위해 사용되며, W3C나 IETF의 표준을 엄격하게 준수하지 않는다. 같은 코드라도 웹 브라우저마다 다르게 해석해서 다른 결과물을 보여준다.',
    },
    {
        category: 'CS',
        term: '메타태그', 
        description: '문서 자체를 설명하는 정보를 담고있는 태그(핵심 키워드, 누가 만들었는지 문자셋 등)로 문서의 정보를 브라우저와 검색엔진에게 이 문서가 어떤 정보를 가지고 있는지 알려주는 것을 명시합니다',
    },
    {
        category: 'CS',
        term: 'ECMA Script 와 JavaScript', 
        description: 'ECMA Script는 Ecma International에 의해 제정된 ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어. 스크립트 언어가 준수해야 하는 규칙, 세부 사항 및 지침을 제공합니다. 이 ECMA Script 사양을 준수하는 범용 스크립팅 언어가 JavaScript입니다.',
        more: 'Ecma International : 정보 통신에 대한 표준을 제정하는 비영리 표준화 기구. script : 독립된 시스템에서 작동하도록 특별이 설계된 프로그래밍 언어',
        link: [['JavaScript와 ECMAScript는 무슨 차이점이 있을까?', 'https://wormwlrm.github.io/2018/10/03/What-is-the-difference-between-javascript-and-ecmascript.html']]
    },
    {
        category: 'CS',
        term: 'JavaScript 엔진', 
        description: 'JavaScript 코드를 이해하고 실행하는 프로그램 또는 인터프리터로 브라우저마다 다르기 때문에 퍼포먼스 차이와 지원되는 ECMAScript 가 다릅니다.',
        link: [
            ['[OS] Compiler vs Interpreter', 'https://velog.io/@jaeyunn_15/OS-Compiler-vs-Interpreter']
        ]
    },
    {
        category: 'CS',
        term: 'Whatwg', 
        description: 'Web Hypertext Application Technology Working Group. Html을 유지하고 발전시키는 커뮤니티. 브라우저 제조사(구글, 애플, 마이크로소프트, 모질라)연합. HTML표준은 탈 권위적이고 살아있는것이 됨(버전이 사라짐)',
    },
    {
        category: 'CS',
        term: '웹접근성, 웹표준, 웹호환성', 
        description: '웹접근성 : 웹사이트에서 제공하는 정보를 차별 및 제한 없이 동등하게 이용할 수 있도록 보장하는것. 웹표준 : 웹 사용성 및 접근성 보장. 웹호환성: 웹 브라우저 버전, 종류와 관계없는 웹사이트 접근',
        link: [
            ['웹표준과 웹호환성', 'http://www.smartebiz.kr/new/subpage02_02.html']
        ]
    },
    {
        category: 'CS',
        term: '시멘틱 마크업', 
        description: '의미를 잘 전달하도록 각 태그를 용도에 맞게 사용함. SEO(검색엔진 최적화)에 유리하며, 웹접근성 측면에서 시각장애 사용자에게 의미를 전달하기 좋고 코드 가독성이 좋다.',
    },
    {
        category: 'CS',
        term: 'CDN', 
        description: 'Content Delivery Network. 협력하여 인터넷 콘텐츠를 고속 전송하는 지리적으로 분산된 서버 집단을 의미하며, 서버와 사용자 사이의 물리적인 거리를 줄여 콘텐츠 로딩에 소요되는 시간을 최소화합니다.',
        link: [
            ['notion정리: CND', 'https://www.notion.so/ryu-soohyeon/11825774c24449c0b438645ae0301a57?pvs=4#9e4a167b368b43028e8dbb4fa43afde7'], 
        ]
    },
    {
        category: 'CS',
        term: '클래스 vs 객체', 
        description: '클래스 : 객체를 만들어내기 위한 설계도로 연관된 속성과 메서드를 추상화한 집합. 객체 : 클래스에 선언된 그대로 생성된 실체로 소프트웨어 세계에 구현할 대상이다. 객체를 실체화하면 그것을 인스턴스라고 하며, 인스턴스는 메모리에 할당된다',
        more: '클래스 : 템플릿, 틀. 한번만 선언함. 클래스안에는 데이터가 없고 메모리에 올라가지 않음. 객체 : 하나의 클래스로 여러개의 객체를 만듬. 객체 안에는 데이터가 있으며 메모리에 올라감',
        link: [
            ['스터디notion에 정리한 내용', 'https://www.notion.so/onestroke/vs-0ad9da37bfa74fa681a898bac30ead23?pvs=4'], 
        ]
    },
    {
        category: 'CS',
        term: '객체지향 4대 특성 및 5대 원칙', 
        description: '4대 특성 : 캡슐화, 상속, 다형성, 추상화. 5원칙 SOLID : SRP (Single Responsibility Principle, 단일 책임의 원칙), OCP (Open Close Principle, 개방 폐쇄의 원칙), LSP (Liskov Subsitution Principle, 리스코브 치환의 원칙), ISP (Interface Segregation Principle, 인터페이스 분리의 원칙), DIP (Dependency Inversion Principle, 의존성 역전의 원칙)',
        link: [
            ['스터디notion에 정리한 내용', 'https://www.notion.so/onestroke/4-5-e9661dad47f74f93bac8a2078a996186?pvs=4'], 
        ]
    },

    // get과 post차이 부터 기록하면 됨
    // {
    //     category: 'CS',
    //     term: '키워드', 
    //     description: '설명입니다',
    //     more: '추가 설명입니다',
    //     link: [
    //         ['링크1', 'https://github.com/Ryusoo-h/hanmadi'], 
    //         ['링크2', 'https://github.com/Ryusoo-h/hanmadi']
    //     ]
    // },
];

export default terms;