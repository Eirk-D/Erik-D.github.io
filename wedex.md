## Angular 之 **表格**

#### 基础介绍
** 通过 (# + name) 标记表单， 然后表单的事件通过 #name调用
Angular表单的submit事件一般写入表单校验以及提交的其他事件，通过'&&' 隔开。
```markdown
<form #f2="ngForm" (ngSubmit)="(f2.form.valid)">
</form>
```
#### 表单校验
```html
<div *ngIf="name.submitted && !model.contact">Warning message.</div>
<input type="tel" #contact="ngModel" #name="phone" [(ngModel)]="model.phone" [textMask]="{mask: mask}"/>

<button type="submit" class="btn btn-default" (click)="sendEvent()">Save && Sent</button>
```
## Angular 之 **弹窗**
通过`ng-template`标签，#name方式创建主容器，div.modal-header标签，div.modal-body标签，div.modal-footer标签分别作为
弹窗的头部，主题，尾部。其中头部主要用来放标题，关闭按键。
```html
<ng-template #examplePop>
div button X div.modalbody div.modal-footer
</ng-template>
```

