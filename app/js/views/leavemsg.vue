<template>
<div class="rmain">
<div class="leavemsgC">
	<h1><b>在线留言</b></h1>
	<div class="sad">
		<a href="javascript:;" class="on" data-i="1">在线留言</a>
		<a href="javascript:;" data-i="2">留言反馈</a>
	</div>
	<ul class="u1">
		<div class="inpwp">
			<form action="/?act=leavemsg&amp;op=to_leavemsg" method="post" enctype="multipart/form-data" target="dynamic_creation_upload_iframe_form">
				<li>
					<span>留言标题：</span>
					<em><input type="text" class="text til" name="title" required="true" maxlength="32"></em>
				</li>
				<li>
					<span>问题类型：</span>
					<em>
						<select name="msgtype" class="text selC">
																				<option value="complaint">意见或建议</option>
																											<option value="ask">信息咨询</option>
																											<option value="thaw">申请账号解冻</option>
																											<option value="report">投诉举报</option>
																																</select>
					</em>
				</li>
				<li>
					<span>上传图片：</span>
					<em>
						<a href="javascript:;" class="fila">选择图片
							<input type="file" name="imgfile" id="uploadimgfile">
						</a>
						<b class="imgb"><img class="show_big_img" src="/images/bgblack.png" id="showimg" style="width:auto;max-height:40px;position:relative;top:2px;left:25px;"></b>
					</em>
				</li>
				<li class="ctd">
					<span>留言内容：</span>
					<em><textarea class="ctt" name="content" required="true" maxlength="360"></textarea></em>
				</li>
				<li>
					<span></span>
					<em><input type="submit" class="btn" value="提交留言"></em>
				</li>
			</form>
		</div>
	</ul>
	<ul class="u2">
		</ul>
</div>

</div>
</template>
<script>
export default {}
</script>
