//BEGIN helper for html and karma usage
var path = '';
if (typeof window.__karma__ !== 'undefined') {
	path += 'base/' //used for fixtures in karma
}
else {
	var $j = $; //used for event listeners in karma
}
jasmine.getFixtures().fixturesPath = path + 'spec/javascripts/fixtures';
//END helper for html and karma usage

describe("InteractiveVideoPlayerUtils Tests", function () {

	describe("HTML Builder Test Cases", function () {
		beforeEach(function () {
			question_text = 'Question';
			private_text = 'private';
		});
		afterEach(function () {
		});

		it("InteractiveVideoQuestionCreator object must exists", function () {
			expect(typeof il.InteractiveVideoPlayerUtils).toEqual('object');
		});

		it("builCommentTextHtml must return html", function () {
			var expec = '<span class="comment_text">My little text</span> ';
			var value = il.InteractiveVideoPlayerUtils.protect.builCommentTextHtml('My little text');
			expect(value).toEqual(expec);
		});

		it("builCommentTitleHtml must return html", function () {
			var expec = '<span class="comment_title">My little text</span> ';
			var value = il.InteractiveVideoPlayerUtils.protect.builCommentTitleHtml('My little text');
			expect(value).toEqual(expec);
			expec = '<span class="comment_title"></span> ';
			value = il.InteractiveVideoPlayerUtils.protect.builCommentTitleHtml(null);
			expect(value).toEqual(expec);
		});

		it("builCommentUsernameHtml must return html", function () {
			var expec = '<span class="comment_username"> [Username]</span> ';
			var value = il.InteractiveVideoPlayerUtils.protect.builCommentUsernameHtml('Username', 0);
			expect(value).toEqual(expec);
			expec = '<span class="comment_username"> [Question]</span> ';
			value = il.InteractiveVideoPlayerUtils.protect.builCommentUsernameHtml('Username', 1);
			expect(value).toEqual(expec);
			expec = '<span class="comment_username"> </span> ';
			value = il.InteractiveVideoPlayerUtils.protect.builCommentUsernameHtml('', 0);
			expect(value).toEqual(expec);
		});

		it("builCommentPrivateHtml must return html", function () {
			var expec = '<span class="private_text"> (private)</span> ';
			var value = il.InteractiveVideoPlayerUtils.protect.appendPrivateHtml(1);
			expect(value).toEqual(expec);
			expec = '<span class="private_text"></span> ';
			value = il.InteractiveVideoPlayerUtils.protect.appendPrivateHtml(0);
			expect(value).toEqual(expec);
		});

		it("builCommentTimeHtml must return html", function () {
			var expec = '<time class="time"> <a onClick="il.InteractiveVideoPlayerUtils.jumpToTimeInVideo(61); return false;">undefined</a></time>';
			var value = il.InteractiveVideoPlayerUtils.protect.builCommentTimeHtml(61, 0);
			expect(value).toEqual(expec);
			expec = '<time class="time"> <a onClick="il.InteractiveVideoPlayerUtils.jumpToTimeInVideo(60.9); return false;">undefined</a></time>';
			value = value = il.InteractiveVideoPlayerUtils.protect.builCommentTimeHtml(61, 1);
			expect(value).toEqual(expec);
		});

		it("builCommentTagsHtml must return html", function () {
			var tags = 'Tag1, Tag2';
			var expec = '<br/><div class="comment_tags"><span class="tag">Tag1</span> <span class="tag"> Tag2</span> </div>';
			var value = il.InteractiveVideoPlayerUtils.protect.builCommentTagsHtml(tags);
			expect(value).toEqual(expec);
			expec = '<br/><div class="comment_tags"></div>';
			value = il.InteractiveVideoPlayerUtils.protect.builCommentTagsHtml(null);
			expect(value).toEqual(expec);
		});

		it("fillEndTimeSelector must return html for 1 second", function () {
			loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');
			var h = $('#comment_time_end\\[time\\]_h').html();
			var m = $('#comment_time_end\\[time\\]_m').html();
			var s = $('#comment_time_end\\[time\\]_s').html();
			expect(h).toEqual('<option value="0" selected="selected">00</option>');
			expect(m).toEqual('<option value="0" selected="selected">00</option>');
			expect(s).toEqual('<option value="0" selected="selected">00</option>');

			il.InteractiveVideoPlayerUtils.fillEndTimeSelector(1);
			h = $('#comment_time_end\\[time\\]_h').html();
			m = $('#comment_time_end\\[time\\]_m').html();
			s = $('#comment_time_end\\[time\\]_s').html();
			expect(h).toEqual('<option value="0" selected="selected">00</option>');
			expect(m).toEqual('<option value="0" selected="selected">00</option>');
			expect(s).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option>');
		});

		it("fillEndTimeSelector must return html for 61 seconds", function () {
			var h, m, s;
			loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');

			il.InteractiveVideoPlayerUtils.fillEndTimeSelector(61);
			h = $('#comment_time_end\\[time\\]_h').html();
			m = $('#comment_time_end\\[time\\]_m').html();
			s = $('#comment_time_end\\[time\\]_s').html();
			expect(h).toEqual('<option value="0" selected="selected">00</option>');
			expect(m).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option>');
			expect(s).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option>');
		});

		it("fillEndTimeSelector must return html for 3601 seconds", function () {
			var h, m, s;
			loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');

			il.InteractiveVideoPlayerUtils.fillEndTimeSelector(3601);
			h = $('#comment_time_end\\[time\\]_h').html();
			m = $('#comment_time_end\\[time\\]_m').html();
			s = $('#comment_time_end\\[time\\]_s').html();
			expect(h).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option>');
			expect(m).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option>');
			expect(s).toEqual('<option value="0" selected="selected">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option>');
		});
	});
	describe("Utils Test Cases", function () {
		beforeEach(function () {
			comments = [];
			stopPoints = [];
			called = false;
			il.InteractiveVideo = {};
			callHelper = {
				play: function () {
					called = true;
				},
				pause: function () {
					called = true;
				}
			};
			spyOn(callHelper, 'play');
			spyOn(callHelper, 'pause');

		});

		afterEach(function () {
		});

		it("sliceCommentAndStopPointsInCorrectPosition", function () {
			var expec = [{comment_time: 5}];
			il.InteractiveVideoPlayerUtils.sliceCommentAndStopPointsInCorrectPosition({comment_time: 5}, 5);
			expect(comments).toEqual(expec);
			il.InteractiveVideoPlayerUtils.sliceCommentAndStopPointsInCorrectPosition({comment_time: 6}, 6);
			expec = [{comment_time: 5}, {comment_time: 6}];
			expect(comments).toEqual(expec);
			il.InteractiveVideoPlayerUtils.sliceCommentAndStopPointsInCorrectPosition({comment_time: 0}, 0);
			expec = [{comment_time: 5}, {comment_time: 0}, {comment_time: 6}];
			expect(comments).toEqual(expec);
		});

		it("replaceCommentsAfterSeeking", function () {
			var expec = '';
			il.InteractiveVideo.is_show_all_active = false;
			il.InteractiveVideo.filter_by_user = false;
			loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');
			il.InteractiveVideoPlayerUtils.replaceCommentsAfterSeeking(1);
			expect($("#ul_scroll").html()).toEqual(expec);
			expec = '';
			comments = [{comment_time: 5, comment_text: 'Text', is_interactive: 1, comment_tags: null}];
			il.InteractiveVideoPlayerUtils.replaceCommentsAfterSeeking(6);
			expect('').toEqual(expec);
		});

		it("isBuildListElementAllowed", function () {
			il.InteractiveVideo.is_show_all_active = true;
			expect(il.InteractiveVideoPlayerUtils.protect.isBuildListElementAllowed('dummy')).toEqual(false);
			il.InteractiveVideo.is_show_all_active = false;
			expect(il.InteractiveVideoPlayerUtils.protect.isBuildListElementAllowed('dummy')).toEqual(false);
			il.InteractiveVideo.filter_by_user = true;
			il.InteractiveVideo.filter_by_user = 'dummy';
			expect(il.InteractiveVideoPlayerUtils.protect.isBuildListElementAllowed('dummy')).toEqual(true);
		});

		it("getAllUserWithComment", function () {
			var expec = [];
			expec['my name'] = 'my name';
			comments = [{'user_name': 'my name'}];
			expect(il.InteractiveVideoPlayerUtils.protect.getAllUserWithComment()).toEqual(expec);
			expec['my name2'] = 'my name2';
			comments = [{'user_name': 'my name'}, {'user_name': 'my name2'}];
			expect(il.InteractiveVideoPlayerUtils.protect.getAllUserWithComment()).toEqual(expec);
			comments = [{'user_name': 'my name'}, {'user_name': 'my name2'}, {'user_name': 'my name2'}, {'user_name': 'my name2'}];
			expect(il.InteractiveVideoPlayerUtils.protect.getAllUserWithComment()).toEqual(expec);
		});

		it("fillCommentsTimeEndBlacklist", function () {
			il.InteractiveVideo.blacklist_time_end = {};
			expect({}).toEqual(il.InteractiveVideo.blacklist_time_end);
			il.InteractiveVideoPlayerUtils.fillCommentsTimeEndBlacklist('1',1);
			expect({1:[1]}).toEqual(il.InteractiveVideo.blacklist_time_end);
			il.InteractiveVideoPlayerUtils.fillCommentsTimeEndBlacklist('1',2);
			expect({1:[1,2]}).toEqual(il.InteractiveVideo.blacklist_time_end);
		});

		it("clearCommentsWhereTimeEndEndded", function () {
			il.InteractiveVideo.blacklist_time_end = {1:[2,1]};
			il.InteractiveVideoPlayerUtils.clearCommentsWhereTimeEndEndded(0);
			expect({1:[2,1]}).toEqual(il.InteractiveVideo.blacklist_time_end);
			il.InteractiveVideoPlayerUtils.clearCommentsWhereTimeEndEndded(2);
			expect({}).toEqual(il.InteractiveVideo.blacklist_time_end);
		});

		it("loadAllUserWithCommentsIntoFilterList", function () {
			var expec = '<li><a href="#">reset</a></li><li role="separator" class="divider"></li><li><a href="#">my name</a></li>';
			reset_text = 'reset';
			loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');
			comments = [{'user_name': 'my name'}];
			il.InteractiveVideoPlayerUtils.loadAllUserWithCommentsIntoFilterList();
			expect($('#dropdownMenuInteraktiveList').html()).toEqual(expec);
			comments = [{'user_name': 'my name'}, {'user_name': 'my name2'}];
			expec = '<li><a href="#">reset</a></li><li role="separator" class="divider"></li><li><a href="#">my name</a></li><li><a href="#">my name2</a></li>';
			il.InteractiveVideoPlayerUtils.loadAllUserWithCommentsIntoFilterList();
			expect($('#dropdownMenuInteraktiveList').html()).toEqual(expec);
		});

		describe("Utils Test Calling Cases", function () {
			beforeEach(function () {
				loadFixtures('InteractiveVideoPlayerUtils_fixtures.html');
				comments = [];
				stopPoints = [];
				called = false;
				il.InteractiveVideo = {auto_resume: true,};
				callHelper = {
					play: function () {
						called = true;
					},
					pause: function () {
						called = true;
					},
					setCurrentTime: function () {
						called = true;
					}
				};
				spyOn(callHelper, 'play');
				spyOn(callHelper, 'pause');
				spyOn(callHelper, 'setCurrentTime');
				$('#ilInteractiveVideo')[0].play = function () {
					callHelper.play();
				};
				$('#ilInteractiveVideo')[0].pause = function () {
					callHelper.pause();
				};
				$('#ilInteractiveVideo')[0].setCurrentTime = function () {
					callHelper.setCurrentTime();
				};
			});

			afterEach(function () {
			});

			it("resumeVideo true", function () {
				expect(callHelper.play).not.toHaveBeenCalled();
				il.InteractiveVideoPlayerUtils.resumeVideo();
				expect(callHelper.play).toHaveBeenCalled();
			});

			it("resumeVideo false", function () {
				il.InteractiveVideo.auto_resume = false;
				expect(callHelper.play).not.toHaveBeenCalled();
				il.InteractiveVideoPlayerUtils.resumeVideo();
				expect(callHelper.play).not.toHaveBeenCalled();
			});

			it("jumpToTimeInVideo", function () {
				expect(callHelper.play).not.toHaveBeenCalled();
				il.InteractiveVideoPlayerUtils.jumpToTimeInVideo(2);
				expect(callHelper.play).toHaveBeenCalled();
				expect(callHelper.setCurrentTime).toHaveBeenCalled();
			});
			it("jumpToTimeInVideo", function () {
				expect(callHelper.setCurrentTime).not.toHaveBeenCalled();
				il.InteractiveVideoPlayerUtils.jumpToTimeInVideo(null);
				expect(callHelper.setCurrentTime).not.toHaveBeenCalled();
			});
		});
	});

});