// x : x좌표
// y : y좌표

// vertexList = [
//    {x:10, y:10},
//    {x:10, y:-10}
//    {x:-10, y:-10}
//    {x:-10, y:10}
//] : 기준 x,y 좌표와 비교하여 꼭짓점을 표현 무조건 시계방향으로 해야함
// 타원의 방정식 보다가 머리 터질 것 같아서 분리 초평면 써서 
// 볼록한 도형(별 같은 거 안 됨)만 됨 ㅈㅅ 봐주셈

// 원래 sizeX,Y로 조절했는데 다각형
// hitBoxType : 히트박스 종류
// type : 자신의 종류 (플레이어라면 InteractionSprites->Unit->Friendly)

class Sprites {
    constructor(x,y,vertexList, hitBoxType){
        this.x = x
        this.y = y
        this.vertexList = vertexList
        this.hitBoxType = hitBoxType

        this.type = []
    }
}