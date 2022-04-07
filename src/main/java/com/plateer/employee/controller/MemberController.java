package com.plateer.employee.controller;

import com.plateer.employee.service.MemberService;
import com.plateer.employee.vo.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/api/member")
@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping(value = "/{startNumber}/{countNumber}")
    public List<Member> getBoardList(@PathVariable("startNumber") String startNumber, @PathVariable("countNumber") String countNumber) {
        return memberService.getMemberList(startNumber, countNumber);
    }

    @GetMapping(value = "/count")
    public Integer countMember() {
        return memberService.countMember();
    }

    @GetMapping(value = "/{memberId}")
    public Member viewMember(@PathVariable("memberId") String memberId) {
        return memberService.viewMember(memberId);
    }

    @PostMapping(value = "")
    public Integer insertMember(@RequestBody Member member) {
        return memberService.insertMember(member);
    }

    @PostMapping(value = "/update")
    public Integer updateMember(Member member) {
        return memberService.updateMember(member);
    }

    @PostMapping(value = "/delete/{memberId}")
    public Integer deleteMember(@PathVariable("memberId") String memberId) {
        return memberService.deleteMember(memberId);
    }


}
