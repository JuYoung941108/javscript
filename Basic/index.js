const arr=[1,2,3];
arr.forEach(console.log);
// arr.forEach(alert);  
// alert is not defined
// code runner 확장 플러그인은 노드 환경을 사용해 자바 스크립트를 실행한다.
// 따라서 클라이언트 사이드 web API인 alert 함수를 노드에선 알 수 없다.

// 내장 터미널 단축키: ctrl+백틱키
// 해당 프로젝트가 절대 경로이므로 내가 만든 디렉토리 가려면
// 'cd(이동 명령어) 디렉토리명' == cd EX3
// C:\Users\USER\vscode workspace\JavaScript_Deep_Dive\EX3

// 마켓플레이스 - code runner
// 실행 단축키: ctrl+alt+N => 현재 표시중인 자바스크립트 파일을 실행할 수 있다.
// [Running] node "c:\Users\USER\vscode workspace\JavaScript_Deep_Dive\EX3\index.js"
// 1 0 [ 1, 2, 3 ]
// 2 1 [ 1, 2, 3 ]
// 3 2 [ 1, 2, 3 ]

// [Done] exited with code=0 in 0.108 seconds