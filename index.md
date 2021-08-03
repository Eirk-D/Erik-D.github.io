## Angular 之 **表格**

```markdown
<form #f2="ngForm" (ngSubmit)="(f2.form.valid)">
</form>

** 通过 (# + name) 标记表单， 然后表单的事件通过 #name调用
Angular表单的submit事件一般写入表单校验以及提交的其他事件，通过' ; ' 隔开。
```
