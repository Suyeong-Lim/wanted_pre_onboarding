# wanted_pre_onboarding

## 원티드 프리온보딩 코스 과제 
<img src="https://user-images.githubusercontent.com/28384562/158649207-8029ea67-37ce-4115-9c6d-a4f9b9aee6fa.png"/>

## 배포 링크 https://lsy-wanted-pre-onboarding.netlify.app/

## ✅ 구현사항 
- 상단 GNB
- 캐러셀 영역 왼/오 클릭 이벤트->카드이동 
- 반응형 
- 배포 

## ❓어려웠던 점 

- 처음에는 할만하다고 생각했지만, 막상 캐러셀을 구현해보니 캐러셀 클릭이벤트 시 총 11개의 슬라이더들에서 양 끝의 마지막 슬라이더들이 자연스럽게 infinite 처럼 구현하는 것이 어려웠다. 
원티드 사이트에서 어떻게 구현했는지 살펴보니 총 슬라이더가 33개가 들어가있어서 가운데 11개의 슬라이더들이 사용자에게 보여지고 클릭이벤트가 발생하면 앞뒤로 있는 22개의 슬라이더들이 움직이며 눈속임으로 infinite처럼
보일 수있도록 만들어져 있는 것 같았다. 그래서 나 또한 33개의 슬라이더를 만들어서 구현해보려고했으나 구현되지 않았고, 
결국 3개의 슬라이더단위로 사용자에게 보여져야 하므로 앞뒤로 슬라이더를 복사하여 총 13개의 슬라이더를 만든 후 translate 이벤트가 양 끝 마지막 캐러셀에서 발생할 경우 transition 이벤트를 none으로 
설정하여 다시 되돌아가는 이벤트를 없애는 식으로 캐러셀을 Infinite 처럼 보이도록 구현하게되었다.  <p><br>

- 이번과제를 통해 라이브러리 없이 캐러셀을 어떻게 구현할 수있을지 생각해볼 수 있어서 좋았고, 슬라이더를 33개를써서 구현하는것은 어떤식으로 해야하는지에 대해서 좀더 생각을 해보면 좋을것 같다.

